const Home = ({ pruodeks, onImg }) => {

    if (pruodeks.length == 0) {
        return <main className="main1">
            <h1>Unday Mahsulot yoq</h1>
        </main>
    }
    return (

        <>

            <main className="main1">
                <h1>Length {pruodeks.length}</h1>
                <div className="boxs">
                    {pruodeks.map((item) => (
                        <div className="box">
                            <img onClick={() => onImg(item.id)} src={item.thumbnail} alt="" />
                            <div className="spans">
                                <h3 className="title">{item.title}</h3>
                                <p>{item.price} $</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
