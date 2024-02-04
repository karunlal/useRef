const TimerChallenge = ({title, targetTime})=>{

    return <section className = "Challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime> 1 ? 's' : ''}
        </p>
        <p>
            <button>
                Start Challenge
            </button>
        </p>
        <p className = "">
            Time is running... / Timer inactive
        </p>
    </section>



}

export default TimerChallenge