call child method on parent event  

solution 1

```
const Parent = () => {
   const childRef = useRef();

   const handleKeyDown = (event) => {
      // Call the child function doSomething()
      childRef.current.doSomething(event);
   };
   
   return (
      <input
         type="text"
         onKeyDown={handleKeyDown}
      >
    
      <Child ref={childRef} />
   );
};

const Child = forwardRef((props, ref) => {
   useImperativeHandle(ref, () => ({
      doSomething: (event) => {
         // Get the event from parent
      }
   }));

   return (
      [...]
   );
});
```

solution 2

```
class Parent extends React.Component {
   childCallables = null;
    
   setChildCallables = (callables) => {
      this.childCallables = callables;
   }
    
   handleKeyDown = (event) => {
      // Call the child function doSomething()
      this.childCallables.doSomething(event);
   }
    
   render() {
      return (
         <input
            type="text"
            onKeyDown={this.handleKeyDown}
         >
    
         <Child setCallables={this.setChildCallables} />
      )
   }
}

class Child extends React.Component {
   componentDidMount() {
      this.props.setCallables({
         doSomething: this.doSomething
      });
   }
    
   doSomething = (event) => {
      // Get the event from parent
   }
    
   render() {
      return (
         [...]
      )
   }
}
```