    // Урок 1-1
        var HelloWorld = React.createClass({
            render: function() {
                return <h1> My name is {this.props.name} and I love {this.props.action}! </h1>;
            }
        });

        ReactDOM.render(
            <div>
                <HelloWorld name="Arsenii" action="pizza" />
                <HelloWorld name="Kolya" action="sex" />
                <HelloWorld name="Katya" action="footbol" />
                <HelloWorld name="Vasya" action="melodrams" />
            </div>,
            document.getElementById('content')
        );