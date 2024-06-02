// social media accounts and emails

function Account(props){
    return(
        <div>
            <img src={props.img} alt={props.type} />
            <a href={props.href}>{props.hrefName}</a>
        </div>
    );
}

export default Account;