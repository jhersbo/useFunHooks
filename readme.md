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
When passed an HTML `ref`, it will return the cursor's window position as `{x: number, y: number}`. It will consider scroll distance during this process. Its usecase has been enabling the user to click and drag elements within the window. Typically, this will be done by storing the `clicked` state in a React state variable, thus toggling the element's `position` reference between either a static reference (element snaps back when unclicked), or a React ref object (element stays put when unclicked).
### Usage ###
```JSX
function App(){
    return(
        <div>
            <MoveableElement/>
        </div>
    )
}

function MoveableElement({props, children}){
    
    const divRef = useRef()
    const point = useFollowPointer(divRef)
    // can initialize prevPoint as either undefined or the element's 
    // starting coordinates
    let prevPoint = useRef()

    let [ clicked, setClicked ] = useState(false)

    function handleClick(){
        prevPoint.current = point
        setClicked(!clicked)
    }

    return(
        <div
            ref={divRef} 
            style={{
                position: clicked ? point : prevPostion
            }}
            onClick={()=>{
                handleClick()
            }}
        >
            {children}
        </div>
    )
}
```