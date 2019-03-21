import React from 'react'
import ListItem from './ListItem';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ListItem title="First Video"/>
                <ListItem title="Second Video"/>
                <ListItem title="other videos"/>
                <ListItem title="other videos"/>
                <ListItem title="other videos"/>
                <ListItem title="other videos"/>
            </div>
        )
    }
}

export default Sidebar