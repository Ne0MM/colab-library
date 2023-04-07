/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        growCenter : {
          '0%' : {transform : 'scale(0)'},
          '10%' : {transform : 'scale(1)'}
        },
        growText : {
          '0%, 100%' : {transform : 'translateY(200px)', opacity : '0'},
          '10%, 95%' : {transform : 'translateY(0px)', opacity : '1'},
        },
        rotatePink : {
          '0%, 10%' : {transform : 'rotate(90deg) scale(0)'},
          '30%, 100%' : {transform : 'rotate(0deg) scale(1)'},
        },
        rotateOrange : {
          '0%, 30%' : {transform : 'rotate(0deg) scale(0)'},
          '40%, 100%' : {transform : 'rotate(90deg) scale(1)'},
        },
        rotateGreen : {
          '0% , 40%' : {transform : 'rotate(90deg) scale(0)'},
          '50%, 100%' : {transform : 'rotate(180deg) scale(1)'}
        },
        rotateBlue : {
          '0%, 50%' : {transform : 'rotate(180deg) scale(0)'},
          '60%,100%' : {transform : 'rotate(270deg) scale(1)'}
        },
        rotatePurple : {
          '0%, 60%' : {transform : 'rotate(225deg) scale(0)'},
          '65%, 100%' : {transform : 'rotate(315deg) scale(1)'}
        },
        rotateRed : {
          '0%, 65%' : {transform : 'rotate(-45deg) scale(0)'},
          '70%, 100%' : {transform : 'rotate(45deg) scale(1)'}
        },
        rotateYellow : {
          '0%, 70%' : {transform : 'rotate(45deg) scale(0)'},
          '75%, 100%' : {transform : 'rotate(135deg) scale(1)'}
        },
        rotateLightBlue : {
          '0%, 75%' : {transform : 'rotate(135deg) scale(0)'},
          '80%, 100%' : {transform : 'rotate(225deg) scale(1)'}
        },
        growLogo : {
          '0%, 95%' : {transform : 'scale(1)'},
          '100%' : {transform : 'scale(0)'}
        }

      },
      animation : {
        growCenter : 'growCenter 1s ease-in-out forwards',
        growText : 'growText 1.3s ease-in-out forwards',
        growLogo : 'growLogo 1.3s ease-in-out forwards'

      },
      fontFamily: {
        'Noto-sans' : ['Noto-Sans', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

