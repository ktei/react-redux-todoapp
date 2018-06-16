
import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, updateNewItem, saveNewItem } from 'actions/todos';

function TodoItem({ item: { title } }) {
  return (
    <div className="list-group-item list-group-item-action">
      {title}
    </div>
  );
}

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      newItemTitle: '',
    };

    this.handleNewItemTitleChange = this.handleNewItemTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleNewItemTitleChange(e) {
    this.setState({ newItemTitle: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.saveNewItem({ title: this.state.newItemTitle });
    this.setState({ newItemTitle: '' });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <span className="navbar-brand mb-0 h1">Todo App</span>
          </div>
        </nav>
        <div className="container todo-container" style={{ marginTop: 10 }}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  className="form-control"
                  placeholder="Title"
                  value={this.state.newItemTitle}
                  onChange={this.handleNewItemTitleChange}
                />
              </div>
            </form>
            <div className="list-group">
              {this.props.items.map(item => <TodoItem key={item.id} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todos.items,
    newItem: state.todos.newItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    updateNewItem: payload => dispatch(updateNewItem(payload)),
    saveNewItem: payload => dispatch(saveNewItem(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
