import React from 'react'

class ListItem extends React.Component {
    render() {
        return (
            <div className="list-item">
                    <div className="list-item__image">
                        <img src="https://www.placecage.com/150/150" alt=""/>
                    </div>
                    <div className="list-item__desc">
                        <div className="list-item__desc--title">
                            {this.props.title}
                        </div>
                        <div className="list-item__desc--desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor officia neque ipsum voluptas.
                        </div>
                    </div>
                </div>
        )
    }
}

export default ListItem;