
import './Card.css';

function Card(props) {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="profile-img" >
                        <img src={props.item.icon} alt="" width="60%" />
                    </div>

                    <div className="content">
                        <div className="sub-content">
                            <h1>{props.item.name} </h1>
                            <div className='detail'>
                                <span className='value'>
                                    {props.item.price}
                                </span>
                                <span className={props.item.type}>
                                    {props.item.percentage}
                                </span>
                            </div>
                            <h1>Price</h1>
                            <div className='detail'>
                                <span className='value'>
                                    {props.item.tvl}
                                </span>
                            </div>
                            <h1>TVL</h1>
                            <div className='image-container'>
                                <div className='image-wrapper'>
                                    {
                                        props.item.popularPair.map(item => {
                                            return (
                                                <img src={item} alt="" width="20%" />
                                            )
                                        }
                                        )
                                    }
                                </div>
                            </div>
                            <h1>Popular Pairs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
