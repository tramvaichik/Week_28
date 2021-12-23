import React from "react";


class Tarif extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
    };

    handelClick = () => {
        this.setState(
            { isSelected: !this.state.isSelected }
        );
    }

    render() {
        const { title, price, traffik } = this.props;
        const tarifCard = (this.state.isSelected ? "selected" : "")
        return (
            <div onClick={this.handelClick} className={"tarif " + tarifCard}>
                <div className="tariff">
                    <div className="tarif-header">Безлимитный {title} </div>
                    <div className="tarif-section1">{price} руб/мес </div>
                    <div className="tarif-section2"> до {traffik} Мбит/сек</div>
                    <div className="tarif-footer">Объем включенного трафика не ограничен</div>
                </div>
            </div>
        )
    }
}

export default Tarif;