var Item = React.createClass({ 
    getInitialState() {
        return {editable: false}
    },
    
    handleEdit() {
        console.log('edit button clicked')
        if(this.state.editable){
            var id = this.props.item.id;
            var name = this.refs.name.value;
            var description = this.refs.description.value;
            console.log('in handleEdit', this.state.editable, name, description);
            var item = {id: id , name: name , description: description}; 
            this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    },
    
    render() { 
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
        return ( 
            <div> 
                {name}
                {description}
                <button onClick={this.handleDelete} >Delete</button> 
                <button onClick={this.handleEdit}>  {this.state.editable ? 'Submit' : 'Edit' } </button> 
            </div> 
        ) 
    } 
});
