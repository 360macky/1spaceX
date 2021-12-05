<p align="center">
  <img
    src="public/logo192.png"
    align="center"
    width="100"
    alt="SpaceX Search"
    title="SpaceX Search"
  />
  <h1 align="center">1spaceX.com</h1>
</p>


<p align="center">🚀 Find <a href="https://www.spacex.com/">SpaceX</a> data with this <a href="https://reactjs.org/">React App</a> 🔍</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/static/v1?label=Node&message=v16.12&color=339933&logo=node.js&style=for-the-badge" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/static/v1?label=React&message=v16.12&color=61DAFB&logo=react&style=for-the-badge" /></a>
  <a href="https://getbootstrap.com/"><img src="https://img.shields.io/static/v1?label=Bootstrap&message=v4.4.1&color=563D7C&logo=bootstrap&style=for-the-badge" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/static/v1?label=React%20Router&message=v5.1.2&color=CA4245&logo=react-router&style=for-the-badge" /></a>
  <a href="https://github.com/r-spacex/SpaceX-API"><img src="https://img.shields.io/static/v1?label=SpaceX%20API&message=v3&color=000000&logo=spacex&style=for-the-badge" /></a>
</p>

<p align="center">
  🤗 Thank you for visiting this space exploration project, help spread it by giving a star 🌟<br />
  <br />
  <a href="https://github.com/360macky/spacex-search/stargazers"><img src="https://img.shields.io/github/stars/360macky/spacex-search?label=Star%20this%20repository%21&style=social" /></a><br />
</p>
 



![Demo of SpaceX Search](./.github/demo.gif)
![Screenshoot Capsules Home SpaceX Search](./.github/screenshot_1.PNG)
![Screenshoot Capsules Results SpaceX Search](./.github/screenshot_2.PNG)


## 📦 Deployment

Once you have the repository **spacex-search**, run this command from the project directory:

🔽 Install all dependencies...

```bash
npm install
```

🚀 Run and launch

```bash
npm start
```


## 🎨 Design
SpaceX Search has a totally responsive design based on media queries rules and Bootstrap 4 practices.
You can test it by accessing the web from your mobile browser.

<img
  src=".github/android_screenshot.png"
  align="center"
  width="200"
  alt="SpaceX Search on Android phone"
  title="SpaceX Search on Android phone"
/>


## 🧪 Testing
**SpaceX Search App** is integrated with a progressive unit-testing in the core components. This unit-testing is implemented with `@testing-library/react`.

*Footer unit-testing example:*
```javascript
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Suite test Footer', () => {
  it('should render GitHub Repository of the footer', () => {
    const { getByText } = render(<Footer />);
    const GitHubRepositoryLink = getByText(/GitHub Repository/i);
    expect(GitHubRepositoryLink).toBeInTheDocument();
  });
});
```


## 📂 Folder Structure of SpaceX Search App
/src
-  **/components**: Components used in all the app (including the main App.js)
-  **/images**: Images used in the app
-  **/pages**: Pages rendered in the app. Each page has its own folder here.


## 🎁 Dependencies
- @fortawesome/fontawesome-svg-core: `^1.2.27`
- @fortawesome/free-solid-svg-icons: `^5.12.1`
- @fortawesome/react-fontawesome: `^0.1.9`
- @testing-library/jest-dom: `^4.2.4`
- @testing-library/react: `^9.3.2`
- @testing-library/user-event: `^7.1.2`
- bootstrap: `^4.4.1`
- react: `^16.12.0`
- react-dom: `^16.12.0`
- react-router-dom: `^5.1.2`
- react-scripts: `4.0.0`


## 🤲 Contributing
Do you would like to contribute? Do you want to be the author of a new feature? Awesome! please fork the repository and make changes as you like. [Pull requests](https://github.com/360macky/spacex-search/pulls) are warmly welcome.


## 📃 License
Distributed under the MIT License.
See [`LICENSE`](./LICENSE) for more information.
