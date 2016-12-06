<script type="text/babel">
// Урок 1-2

var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    },
    {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    },
    {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://media.giphy.com/media/RUUdVZqwpfTRS//giphy.gif'
    },
    {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456788935',
        image: 'http://media.giphy.com/media/RUUdVZqwpfTRS//giphy.gif'
    }
];

var Contact = React.createClass({
    render: function() {
        return <li> {this.props.name} </li>;
    }
});

var ContactsList = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    {
                        CONTACTS.map(function(el) {
                            return <Contact key={el.id} name={el.name} />;
                        })
                    }
                </ul>
            </div>
        );
     }
});

ReactDOM.render(
    <ContactsList />,
    document.getElementById("content")
);
</script>