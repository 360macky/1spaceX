<p align="center">
  <img
    src=".github/banner.png"
    align="center"
    width="600"
    alt="SpaceX Capsules Search"
    title="SpaceX Capsules Search"
  />
</p>

--- 

<p align="center">🚀 Find <a href="https://www.spacex.com/">SpaceX</a> Capsules with details with this <a href="https://reactjs.org/">React App</a> 🔍</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/static/v1?label=Node&message=v16.12&color=339933&logo=node.js" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/static/v1?label=React&message=v16.12&color=61DAFB&logo=react" /></a>
  <a href="https://getbootstrap.com/"><img src="https://img.shields.io/static/v1?label=Bootstrap&message=v4.4.1&color=563D7C&logo=bootstrap" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/static/v1?label=React%20Router&message=v5.1.2&color=CA4245&logo=react-router" /></a>
  <a href="https://github.com/r-spacex/SpaceX-API"><img src="https://img.shields.io/static/v1?label=SpaceX%20API&message=v3&color=000000&logo=spacex" /></a>
</p>


![Demo of SpaceX Search](./.github/demo.gif)
![Screenshoot Capsules Home SpaceX Capsules Search](./.github/screenshot_1.PNG)
![Screenshoot Capsules Results SpaceX Capsules Search](./.github/screenshot_2.PNG)

## 📦 Deployment

Once you have the repository **spacex-capsules-search**, run this command from the project directory:

🔽 Install all dependencies...

```bash
npm install
```

🚀 Run and launch

```bash
npm start
```


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

## 📃 License
Distributed under the MIT License.
See [`LICENSE`](./LICENSE) for more information.
