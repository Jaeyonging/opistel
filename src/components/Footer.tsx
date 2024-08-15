import React from 'react'

export const Footer = () => {
    return (
        <div className='fixed bottom-0 w-[100vw] bg-[gray]'>
            <div className='flex justify-center flex-col items-center'>
                <div>만든이: Jaeyonging</div>
                <div>Feel free to contact me</div>
                <div>Email: wodyd1318@naver.com</div>
                <div className='flex flex-row'>
                    <div>
                        GitHub:
                    </div>
                    <div>
                        <a className='github' href='https://github.com/Jaeyonging'> Jaeyonging</a>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        LinkedIn:
                    </div>
                    <div>
                        <a className='github' href='https://www.linkedin.com/in/jaeyong-choi-a38b86268/'> Jaeyong</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
