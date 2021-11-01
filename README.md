# React Errors

## Properties are immutable
```Javascript
class Hello extends React.Component {
    render(){
        this.props.from = "Blue";
        return <p>Hi {this.props.to} from {this.props.from}</p>;
    }
}
```
### TypeError
`Uncaught TypeError: Canot assign to read only property 'from' of object '#<Object>' 

Properties are read-only. We can't asign to this property in the `render`. I can access it and read it, but we don't change it in there. 


Another example

```Javascript
class Hello extends React.Component {
    render(){
        this.props.from = 10;
        return <p>Hi {this.props.to} from {this.props.from}</p>;
    }
}
```

### TypeError
`Uncaught TypeError: Canot add property age, object is not extensible` 

