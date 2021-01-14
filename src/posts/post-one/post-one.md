---
title: Web security for frontend devs 🔐 🚔
slug: web-security-frontend
description: A look at web security from the frontend perspective
date: 2021-01-01
tags: ['#security']
---

As frontend engineers we tend to focus more and are more concerned about how we write javascript, how good the application UI looks, how fast does our web app load to deliver lightening fast user experiences, build tools, application performance and security is one aspect that often doesn't get the attention it should in terms of frontend development goes about and as software engineers it is our responsibility that we deliver our application users highly secure experiences. With this post, I attempt to briefly cover some prominent security threats, how we as frontend devs can combat them effectively and incorporate security in your day-to-day frontend development as a regular practise.

#### Cross-site scripting attack(XSS)

This is one of the most common attacks and you must have heard about it many times. In this attack, the attacker injects code in your application in a place where normal input is expected and that injected code gets executed which can compromise your application in most likliness. As frontend devs, be careful about the following areas to easily get around this attack:

- User generated content which includes input fields, textareas. Make sure you sanitise user input before you use it anywhere in your application. Usually UI frameworks/libraries do it for you.
- Anywhere user-input is reflected back eg. _Couldn't find user \${username}._ If this is rendered in markup directly, _username_ could be replaced by a script tag which will get executed.
- Query params rendered directly in markup. You get the point right? 👀
- element.InnerHTML ❌
- Image upload in your application. Images contain EXIF tags from which meta data is extracted and if you are rendering meta data in HTML markup then there can be security concerns because EXIF tags can be constructed with malicious HTML markup and if there is no sanitisation performed then you are in for a wild ride ☠️

So how do we protect against XSS attack? One simple approach is to sanitise user inputs but `Content security policy` is your strongest weapon. Content-security-policy is an HTTP response header that your server can set. This tells the browser to execute code from _allowed domains only_. **You can set multiple directives for script tags, images, fonts, css etc.** This will tell the browser to load resources in accordance with mentioned directives in the header. The browser will simply not allow anything that violates the content security policy. You can read more about CSP [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

#### Clickjacking

The next attack is kind of a UI redress attack called **Clickjacking**. The attacker is simply hijacking the user's clicks without the user even knowing. There are transparent UI layers underneath, the user thinks s/he's clicking a button on a page they are viewing but infact they are probably clicking on a transparent iframe. Iframes/frames are the most popular ways in which this attack can be performed because of their ability to be embedded in a parent webpage. So, how do we get around this? There are multiple options to solve this. Let's see them one by one.

- The `X-Frame-Options` HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a frame, iframe, embed or object. You can use this to ensure that your webpage is not embedded in any other site. Set the appropriate directive suitable for your webapp.
- Set **content security policy's 😎 frame-ancestors directive.** This specifies valid ancestors for your web page using frame, iframe, object or embed.
- Check if your web page is loaded in an iframe but how? This code-snippet will help you out. This technique is called framekiller/framebusters.

  ```jsx
  <style>html{display:none;}</style>
  <script>
     if (self == top) {
         document.documentElement.style.display = 'block';
     } else {
         top.location = self.location;
     }
  </script>
  ```

#### 3rd party libraries

Next up are 3rd party libraries. We use multiple 3rd party libraries or pieces of code in our application code pulling them directly from CDN's and NPM all the time. When you pull a 3rd party dependency into your application your are putting in a lot of trust into your dependencies. Are you 100% sure you are not pulling any malicious piece of code as well? Are you sure the CDN doesn't tamper with the deloyed assets? Worry not. You can use the following methods that'll help you place more trust and confidence in your dependencies:

- Always use libraries that have LTS(long term support) and audit your dependencies regularly. [Dependabot](https://dependabot.com/) to the rescue 🥷🏻
- Check for bug bounty programmes and open issues for libraries you end up using. Check how actively library maintainers/collaboraters are solving security issues pertaining to the library. See if there are ways people can report security issues for the same library. The project should have an active ecosystem to ensure highly secure code gets shipped.
- When versions are incremented make sure there are tests which assert that only requests which are needed are sent out from your app. If you detect a suspicious network request which shouldn't have been there then you can be sure something is wrong 🕵🏻
- `Subresource Integrity (SRI)` enables browsers to verify that resources they fetch are delivered without any manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match. Integrity attribute is used here by specifying a base64-encoded cryptographic hash of a resource you’re telling the browser to fetch and the browser will first compare the script to the expected hash, and verify that there's a match otherwise return a network error indicating that fetching of the resource failed.
- Lastly, _always ensure you use vendor dependencies that are versioned_. Versioning automatically brings in a check for new code that gets shipped. Malicious code can be added on the same resource and there's no way to know what was added or if you even need that change if there's no versioning.

#### HTTPS

This is very common and I'm sure you must be knowing about this. If your webapp isn't served over HTTPS then it's vulnerable to a wide range of attacks especially man in the middle attack and HTTPS downgrade. HTTPS is more secure in way that it uses encryption over plain HTTP and that prevents your data from being snooped. You can get around these attacks easily by following the below listed methods:

- Ensure you serve your webapp _over HTTPS ONLY_. Have a valid TLS certificate(SSL) to start using HTTPS. TLS ensures encryption. Make sure your private key is well protected on the server side.
- `Strict transport security header` informs the browser that it should never load a site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. If the initial connection is based on plain HTTP and then redirected to HTTPS then this open's up a situation for man in the middle attack. STS header will provide good protection against these attacks.
- If possible add your domain to the `HSTS pre-load list`. This list is shipped with most modern browsers(source code) and browsers will always make a HTTPS request to the domains mentioned in that list. You can view it <a href="https://hstspreload.org/" target="_blank" rel="noopener noreferrer">here</a>. Google actively maintains it.

#### Other worthy mentions

- From security perspective local storage is insecure. A successful XSS attack and your stored sensitive data can be easily compromised. What I'm trying to get to is that don't store sensitive data in local storage especially JWT tokens. If you need to store sensitive data, you should always use a server-side solution using session and couple it with cryptographically signed cookies with properly set cookie flags like `SameSite=strict` and `secure=true`.
- **Tabnabbing**. By default, whenever you open a web page in a new tab using `target="_blank"`, the linked page has access to the linking page via _window.opener.location_. The security issue that creeps in is that attacker can change location of the linking page to point to a malicious site without the user knowing about it and perform a phishing attack. The solution to the above problem is to to add `rel="noopener noreferrer"` attribute to every link with target="\_blank". noopener is the necessary value to ensure linked pages do not have access to the linking page.

That's it for now. If you have reached this far I hope I have given you some insights on web security from frontend perspective ✌🏻.
