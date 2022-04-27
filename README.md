# react-native-touch-reload

> Just touch not a shake! <br/>
> this project inspired from https://github.com/pie6k/react-native-dev-menu-on-touch

## Installation

```sh
npm install sendbird/react-native-touch-reload
```

## Usage

```tsx
// Wrap your app
import { TouchReload } from 'react-native-touch-reload';

const ReloadableApp = () => {
  if (!__DEV__) return <App />;
  return (
    <TouchReload DEFAULT_VISIBLE={boolean} ACTIVE_TOUCHES={number}>
      <App />
    </TouchReload>
  );
};
AppRegistry.registerComponent(appName, () => ReloadableApp);
```

```tsx
// HoC
import { withTouchReload } from 'react-native-touch-reload';

const ReloadableApp = withTouchReload(App, DEFAULT_VISIBLE?, ACTIVE_TOUCHES?);
AppRegistry.registerComponent(appName, () => ReloadableApp);
```

### Props

|      props      | required | default |
| :-------------: | :------: | :-----: |
| DEFAULT_VISIBLE |  false   |  false  |
| ACTIVE_TOUCHES  |  false   |    3    |
