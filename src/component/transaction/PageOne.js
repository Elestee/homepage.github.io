export default function PageOne(props) 
    {
        return (
            <>
                <div className='input-area'>
                    <label className='post-modal-label'>Title: </label>
                    <input type='text' placeholder='Heroes' ref={props.titleRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Genre: </label>
                    <input type='text' placeholder='EDM' ref={props.genreRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Artist 1:</label>
                    <input type='text' placeholder='Elestee' ref={props.artistOneRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Artist 2:</label>
                    <input type='text' placeholder='A.mole' ref={props.artistTwoRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Artist 3:</label>
                    <input type='text' placeholder='' ref={props.artistThreeRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Role 1: </label>
                    <input type='text' placeholder='Composer' ref={props.roleOneRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Role 2: </label>
                    <input type='text' placeholder='producer' ref={props.roleTwoRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Year: </label>
                    <input type='number' min="2012" placeholder="2021" ref={props.yearRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Publisher: </label>
                    <input type='text' placeholder='LFTD Records' ref={props.publisherRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Country: </label>
                    <input type='text' placeholder='Canada' ref={props.countryRef}></input>
                </div>
                <div className='input-area'>
                    <label className='post-modal-label'>Language: </label>
                    <input type='text' placeholder='English' ref={props.languageRef}></input>
                </div>
            </>
)
        
    }