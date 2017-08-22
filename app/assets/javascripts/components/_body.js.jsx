var Body  = React.createClass({ 
    getInitialState() { 
        return { items: [] } 
        
    },
    
    componentDidMount() { 
        console.log('Component mounted'); 
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    }, 
    
    handleSubmit(item) {
        var newState = this.state.items.concat(item); 
        this.setState({ items: newState })
        console.log(item);
    },
    
    render() { 
        return ( 
            <div> 
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items}/>
            </div> 
        )  
    }
});