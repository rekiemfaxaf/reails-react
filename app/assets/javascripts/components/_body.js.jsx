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
    
    handleDelete(id) {
        console.log('delete item clicked');
        $.ajax({
            url: `/api/v1/items/${id}`,
            type: 'DELETE',
            success:() => {
                this.removeItemClient(id);
            }
        });
    },
    
    handleUpdate(item) { 
        $.ajax({ 
            url: `/api/v1/items/${item.id}`, 
            type: 'PUT', data: { item: item }, 
            success: () => { 
                console.log('you did it!!!'); 
                this.updateItems(item); 
            } 
        } 
    )},

    removeItemClient(id) {
        var newItems = this.state.items.filter((item) => {
            return item.id != id;
        });
        
        this.setState({ items: newItems });
    },
    
    updateItems(item) { 
        var items = this.state.items.filter((i) => { return i.id != item.id }); 
        items.push(item); 
        this.setState({items: items 
            
        }); 
    },
    
    render() { 
        return ( 
            <div> 
                <NewItem handleSubmit={this.handleSubmit} />
                <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div> 
        )  
    }
});