function Button() {
    let count = 0;
    let handleClick = (name) => {

        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name} Stop Clicking me!!`);
        }
    }
    return (
        <>
            <button onClick={() => handleClick('Albis')}>Pictures</button>
        </>
    );
}

export default Button