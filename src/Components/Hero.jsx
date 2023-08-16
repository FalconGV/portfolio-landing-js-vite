import React from 'react'

function Hero() {
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
        <p className='text-white text-[40px]'>I'm Vitalii Shostak</p>
        <p className='text-red-500 text-[40px]'>I'm Full Stack Developer</p>
        <p className='text-white text-[40px]'>& UI/UX Designer</p>
        <div className='mt-4 flex gap-4'>
          <button className=' text-white text-[12px] px-3 pb-2 py-2
          bg-red-500 rounded-full border-[2px] hover:border-white '>SEE PORTFOLIO</button>
          <button className=' text-white text-[12px] px-3 pb-2 py-2
          bg-red-500 rounded-full border-[2px] hover:border-white'>CONTACT ME</button>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className=' h-[320px] w-[250px] rounded-[20px] p-2 bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
        {/* foto  */}
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREhEREREREREREREPEhERERkSERISGBgaGRoVGBgcIS4lHh4rIRgYJzgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QGhISGjQlISMxNDQ0NDQxNDQ0MTQ0NDQxNDQ0NDQ0NDQxNDQ0MTQxNDQ0NDQ0MTQ0NDQ0ND8/Pz8/NP/AABEIAKYBLwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIFBgQDBwj/xAA/EAACAQIEAwQGCAMIAwAAAAABAgADEQQFEiEGMUETIlFxMlJhgZGhI0JicpKxwdEHFOEVJDNTgrLw8XSDov/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACMRAQEAAgICAQQDAAAAAAAAAAABAhESIQMxQTJRYXEEIpH/2gAMAwEAAhEDEQA/APm0IRiet4SkohHICOKOSEYiEIspRxWjkhCEIgQjhICEaqTsASfARtTYc1YeakSG0YQtHI7KEcVpLYhJLTZvRVm8gTEyMuxBB9oIkNowjhIlERHCR2VorSUILaBEJIyJEiUI4oNFaKSiMlETCOKDQijhBpK0cITTmIQjkBAQhFUSYhCIEIQkBHEJK0gVpOlTLsqKLsxCge07SMt+F6YfF0r/AFdT/BSZSbrNupa1KUsPl1JWcaqjWBYC7M3W1+QngnFOGfu1KbKDtdlDiVnGlUmuidEpgjzY7n5D4TPTpbq6jhMZlN35bLF8PYbErrwzKjHqhuhPtHSZHH4GpQcpUXSeh5qw8QZ64HHVKDaqbFT1H1W8xNjhMVQzGmUdQKgFyvVT6yGWpkZllh77jC4eg9VgiKWZtgBNdl3DFOmvaYlgxG5S9kXzPWdtOjh8upFj3nbbVbvOfAeAmUzTNquJa7GyA91B6I/c+2ExmPtXK5/T1Glq8R4Wj3KVMtbbuKEX49Z7YbFYbMUdGSzAcmtqW/1lImElpw1WKYmlbk7FD7Qw/e0pd3QuEk3PavzHCGjVek25U2v4g7g/AictppeN6QFZHHN0sf8ASf6zNzOU1XfHLclKEcRg0UI4pERRwgULQhAyUIxGSigUYjJGIwbhQhCCThCE0yI4QiDEYgI5AQhCIEAICSkBCEJAS64Sa2Lp+0OP/kymlhkbMuIpMqltLrewJ2Ox/OOPtnL6as+MktiQfGmhHuJEoJt+JsoqYl6TUwLqrKxY2sLgj9ZX0eEHPpVUH3QTN3G7ccc8ZjO2co0mqMqILsxCgDqZtsNRpZdQLvY1G9Ijm7eovsntlGQphmL6yzWsCwACjraSzPKaOIcNUqt3RZVV1Cj5c4yaZyzmV18PDB4mlmFFkcBXHNeqnoy+yY7MME9B2puNwdj0YdCJssFkeHour06rhl+2pBHUHblOrN8pTFKoLaWQ911sTbqPKVx3BjlMb16fOZYZAl8VQH21Pw3/AElzV4Pb6lZT7GW35T1yPIKtDELUfSVVWsytfvEW5c+pmeN26XPGy9uXjhvpKQ8EY/EzLS/4wZjiTsQqoiAkbHa5sff8pQwy9t+P6YUI4pl0IwjkTJCEcUmiIiMlEYFGEDCRKRkpEwMIwjMUK0nHCEWBGIoxEVIQhCKEcICTIEcISBieuGw71GCIpZm5Af8AOU8hN7gMPTy/D9o4u7AFj9YseSCaxm2MsuP7ceXcLU6Y14lgbblQdKr5nrOmrnuEw40UUDEeoAq/i6zMZnm1XEsSzWW/dQeiB+s4BHlr058be8q+iPjmqYQ1qNlfQWA9KxX0h8jKDI62JxVX6Sq/ZpZ3sdIPgu3jPfgzFgipQb76j2cmH5S0dUwGHdl5lmK/adj3R5AflN++3PWt4qni3NCT2CGwFmcg9ei/rMyutthqJ8Bcn4T3w1CpiKyU171StUVAT1Zja5+M+78O8M4bBUlVEVnsNdUgF3bqbnkPZOHk8nF6vD4OXUfAnV12YOp8GBU/OXHDeaGjU0Ox0VCFNzsrdGn3LNcmw+KpmnWpK6kWvazL7Q3MGfB+JMobBYqph2OoKdSN1ZG3Un29PMQw8vKnzfx7jPvFzxL29BhWpVHVH7rKDdVbxsehnfkOLqvQarXYEAsVNrd1RuT8545NiFxmFajU3ZRpbxt9Vvl8pDiCsuGwqUE5uopjxKj0j7/1no/Lx+/6/KNHiXDVe5Wp6QfWAdDI4zhzD1114Z1UncaTqQ/tMbOnBY6pQbVTcr4j6reYmd/d14a+moY7A1KD6ailT0PRh4gzlm+w9WlmNAq4CuvMdUboynwmFxFFqbsjekrFT5iZyx16bwy31fbyhCEy6FFGYjIwQhCRQhJGRMDCiMcDBpGIxxGFaj0hCE0wJIRCSEgIQhEHGJESUmRHFHIJI1mU+BB+Bm74loHE4ZHp94KRUsN7qRv8JghNDw9n3YfRVLmkTseZQn9JvG/DnnLdWfChjm0zHIKWJHa4dlVm7226OfdyMzGMyytRPfRgPWAuvxlcdCZSrDhLDM+IDgkLTBY263BAHz+UvOLsI1SirqSezYsy9NJ2J936mRyCmMNhHrNzZWqnxsB3R/zxnlwvmfah6FU6mOplv9ZWN2X5/nNzWtOWW7lynwo+GMUlHG4Sq+yJWQsTyAO1/de8/RCsCAQdjuLeE/OWc5ecPVZOanvIfFT+00fDn8QMThUWlUQYimosmptLqPDV1HnPN5fHb3Hv/j+aYzV9V9sM+HfxMxiVcwYIQeyRKTEeuLkj3XljnH8TMRVQpQpjD3Fi5bW4H2drAzEYag9aoqi7O7bk77k3LE/Ew8XjuN3T5/NjlNRoeDcI2p6xJC20AdGPMn3SXGmGY9nVBuouhHQX3B9/7TsznELg8MtGns7DSvjb6zfn8Y8AwxeBKNu4Upc+uo7p/KenXWnz93fL4YaBnVhcurVGKojEg2JtYDzM02W8MInfxLK1t9ANkH3j1meNrrcpEODME666zAhHXQoO2re5b5fnM5nVdamIquvolzY+Ntr/ACl9n/EKlTQw+y+izDYW9Vf3mTIlb1o4S7uVEUcUxXQRRxGRKEcUmiMRkjImBiMIGEGkTAxmKRicIQiyYkhIiSkBHFHEARxCOTIjijlBTEYiEYiK68DmFWgb03K+I5qfMTT5bxTrZadWn3nIQFORJ23UzHS14bpa8VSHgS3wBM3LXPLGWbrb5h/LlBSrMqo+wUnTfT4fKVtHIcMGWpRqsrKdQIdXH/UqeNat6yJ6lO/vY/0EzyuRyJHkbRuXbnjhePt9FzjLFxSBSdLKbq9r28R5SiPCDdKy/gldkecvRqDWzNTaysCxNvBhfwmg4ho1igr4eo9gt2VGNivrCPV7GssbrbgHCDf5y/gMtslyNcKWctrdhYG1go6289pVcN08TXbtKlWp2SHYFj328PKefE+clm7Gk5Cqe+ym2pvC46CXU7N5W8drjH5PQqualao3IALqCqoHQT1ywYWmxpUHXU3eIDFibdb8us+fPUY82J8yTO/h6rpxNE+s+j8W36zPLs3C8fbTZzxB/LOaSU7sAGuTZNxzAEymYZrWr+m/d9Vdl+Et+NadqtN/WQj4H+szcsrdtYSalRIiMkYph1iMIGEFCiMcRk0Io4pESJkpEwMRMI4oNkYozFIxOMRQiyJORElJmiOKOIAjiEcgYhAQERUoxFGJCiXXCZ/vSfdf/aZSztynEilXpueSt3vunY/nNT2xl3FjxiP7z/60t85RTY8XZc9QJWpgvpUqwXcleYYfEzLUcBWc6UpOT90j5yyl2MLLjHPNlwfVrFGRheiPRY9D1UeInhlfC9rPiWFhvoB2/wBRnrm/EC017HDW2GnWvoqPBf3jjNe2Mry/rFlnrVKeHYYdAOjaeaJ1KifPbzR5JxA1P6OsS6Hkx3ZP3EscyyCliR2uHdVZt9t0c+7kZZTl6WN4dX/WLnbkovicPb/Npn4MD+kWKyyvSNnpt5galPvEuOE8sc1e2dGVEB06hbUx228t4SXbds42vTjc9+iPsufmJlpdcU4sVMQwU3WmoQW5X5n57e6UscvawmsYDFGYph0iJhAwkoUIQg0iYQMJGCRMlImBhRRxQbIxRmKRicIQiyYkpESQkzRHFCKMRxCOTJwhCUBiMRCAiynCKEVV/lPEr0VCOvaINl3syjwv4SwqcXrbuUTf7TC3ymRhNS1zuGNu9LPMM5r19ney+ouy+/xldeF4SMmgTOvA5jVoG9Nyo6qd1PmJyRXktbauhxdtapSufFG2PuM8cfxWzqUpJouLaybsAfCZqKW6OE+wJvueZhFCZbgMUCYoNQoQhAlEY4jIiKOKREiZKRMDCigYQbIxRmKRicIQiyLyYkJISFOEIRFAkooxJkRxRyAl5jGoUTTT+WVyaVNyxdgSWFzsJRTQ5pgw7U2Nakn0FIaXJDejz5TUZrmpYvCuQj4YUw1hrSoxZL/Wsec4sdhzSqPTJB0G1/EcwfhaWOByhHcXr03C98pTJLsBuQoNt4ULYnE1ajISiq1U0xzYLZVT8vnHQ3FSAedjbxtFLc43G3uEdV6IKXcA8LW5Qx1Cmr0KroyJVGqogBBVlazaR4Hn75aCpHlCWLZpWZyKQCpey00QEaegItvtPTNsIddCyaKlZFLoNgHLadh0vttIqoAnlc+UDLbGY44djRw5CBDpeoAC9RxzJJ6eyeVXMBUQM4AxCOpSoFHfXqH6XG3xknPjsL2fZ76u0pJV5ctV9vlOWXGfYl2XDqSLNh6TnYDvHVvKa8qp3CM+g8VcN0WzHAYTDolBMRRDPoW3IsWa3jpUz580+jfxGzB8LmGAxFO2ulhkZQeR77Ag+wgke+cc97jthJq7/DwzTOsuy+q+FoZbRrGiezqVa27Mw52NiecjmuWYLH4Cpj8FSGGq4b/GoL6JAsTsNuRuD1taGM/sfM3Ndq74DE1LGorrqps9rXB5fMSqzjhXFYSi9ajXXEYRh9I+HqHTbl31HTf2zM1+q6XffW4ysUcU6uAiMcUiIoQk0DImMyJgYRhCEGiMUDEZNR6QhCLAjEUYkKlCIRxFOAijkKcIhHIAy0z7/Ep/+PR/2yrnpUqM5BZixACi/QDkIyix64GoVqU2U2KuhB94l6h0YzFU1bQai1ERgdNnJDLv03FvfM0J6VKrOxdmLOTcseZPnGVmzbtbFYoMUL1w4NtOpr38p2phGath0xNQuXBZkZiSnVUJPImwnEub4kC3atytewLfitecTOxOoklib3J3v43lsad9XMMQWKKWpm+kU6alNP2QBvOzNC1FsEz7siK7XN7sH1EX8ek4P7WxFrdo3hqsNX4rXnO2KdkCM7FASwU7gE8zLa07M4wxWozrdqdQmojjdSGN7X8RuLTw/kmFE1mOka1VFI3c9SPYIYbMatIaUchb30kBlv5ETyxOLqVSDUcsQLC/IDwA5CW1JXbnXLCnp/K0hfpsWllwatOlmFBcWiim4ZLVVBW7juE36X6+2UJxdQp2ZYlBuFIBtvfY85CtXdyC7MxACgsbkAchDLuNY9WVqs14JxzYypTp4c9k9VmSqthSCMbg36WB5eyaDiLMcG2c4VK4p1aKUBhqpexRHYsQT02JXyvMMvEmPVOzGLrhANOkOeXhfnKlmJJJNydyTzJnPhb7dueM9RqOJuEMVQxFTssPUq0HctSeihddLbhSF5W5TQcLYOrluAx9bGg0qdWnop0HNmZyCLhehNwPdMfgOKcwoIEpYqoqAWCmzhR7NQNpx5nm2JxJDYis9Ujlra4HkOQlccr1TMsZ3PbhEIQm3IjEY4pGCEIGRhGRMZigYUIRGDRRGOIwrUekIQmmBCEJIR3hCSF4XhCK0Wow1mEJLQ1mPWYQktDWYazCEhodoYdoYQgtDtDDtDCERodoYdoYQkdDtDDtDCEFoazDWYQitDWYtZhCS0NRhqMISOjvC8ISAvC8IQJQhCSKFoQkhaLSIQkX/9k="
        className='h-full w-[250px] object-cover rounded-[20px] '/>
      </div>
      </div>
    </div>
  )
}

export default Hero
