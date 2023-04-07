type Props = {
    grow : boolean,
    text : boolean
}

function ColabLogo(props: Props) {

    const grow = (props.grow) ? 'animate-growLogo' : '';  
    const text = (props.text) ? 'animate-growText' : ''; 

  return (
    <div className="scale-50" >
        <div className={`relative h-[240px] w-[200px] flex justify-center items-center ${grow}`}>
            <div className="w-[100px] h-[100px] rounded-full bg-white animate-growCenter flex items-center justify-center
            text-[#7f00ffe6] text-5xl z-20 border-2">
                <div className="h-[50px] w-[50px] font-Noto-sans font-semibold text-center">
                    C
                </div>
            </div>
            <div className="h-full w-full bg-transparent absolute animate-rotatePink z-10">
                <div className="h-1/2 w-1/2 bg-[#ff00ffd9] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotateOrange absolute z-10">
                <div className="h-1/2 w-1/2 bg-[#ff7f00d9] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotateGreen absolute z-10">
                <div className="h-1/2 w-1/2 bg-[#00ff00d9] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotateBlue absolute z-10">
                <div className="h-1/2 w-1/2 bg-[#0000ffda] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotateRed absolute">
                <div className="h-1/2 w-1/2 bg-[#ff0000e5] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotateYellow absolute">
                <div className="h-1/2 w-1/2 bg-[#ffff00e5] absolute">
                </div>
            </div>
    
            <div className="h-full w-full bg-transparent animate-rotateLightBlue absolute">
                <div className="h-1/2 w-1/2 bg-[#037fffe6] absolute">
                </div>
            </div>

            <div className="h-full w-full bg-transparent animate-rotatePurple absolute">
                <div className="h-1/2 w-1/2 bg-[#7f00ffe6] absolute">
                </div>
            </div>
        </div>
        <div className={`text-[#7f00ffe6] mt-[50px] ${text}`}>
          <h4 className='text-4xl font-Noto-sans font-bold'>ColabEduc</h4>
        </div>
    </div>
  )
}

export default ColabLogo