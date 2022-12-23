# @jhersbo/useFunHooks

![npm (scoped)](https://img.shields.io/npm/v/@jhersbo/usefunhooks)

____
## About ##
This package is (or will be) a collection of custom React.js hooks that I have created for niche purposes over the years. Before publishing, I will attempt to give them a higher level of abstraction, but they are predominantly wacky, fun hooks for niche purposes. The [repo](https://github.com/jhersbo/useFunHooks) is open source. Feel free to submit contributions. Enjoy!
____
## Installation ##
```bash
    npm i @jhersbo/usefunhooks
```
___
## Hooks ##
>useFollowPointer
```javascript
    const point = useFollowPointer(ref)
```
When passed an HTML `ref`, it will return the cursor's window position as `{x: number, y: number}`. It will consider scroll distance during this process. It is best used 
