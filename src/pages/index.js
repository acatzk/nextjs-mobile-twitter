import Head from 'next/head'

export default function HomePage () {

  const users = [
    {
      name: 'Zak Bht',
      avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png',
      username: 'ZakariyaeBouhol',
      created_at: '2m',
      posts: [
        {
          title: `Day 48 Coding in the morning is great! Learned about requests and the open function Have a great day #100DaysOfCode`,
          reacted: {
            reply: 0,
            retweet: 2,
            like: 6,
            share: 0
          }
        }
      ]
    },
    {
      name: 'Raja Shaukat',
      avatar: 'https://www.shareicon.net/data/512x512/2016/09/15/829446_user_512x512.png',
      username: 'Riijasub Ali',
      created_at: '1m',
      posts: [
        {
          title: `”I am born each day into more of myself. #100DaysOfCode #Programming #JavaScript #BuenosDías #ShaahYaan`,
          reacted: {
            reply: 3,
            retweet: 25,
            like: 20,
            share: 0
          }
        }
      ]
    },
    {
      name: 'ara ara',
      avatar: 'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg',
      username: 'korrasmuscles',
      created_at: '6m',
      posts: [
        {
          title: 'day 5 of #100daysofcode python time also im thinking of starting c++??? i\'m really intimidated by it tho!!!!!',
          reacted: {
            reply: 0,
            retweet: 5,
            like: 2,
            share: 0
          }
        }
      ]
    },
    {
      name: 'Hacker News',
      avatar: 'https://png.pngtree.com/png-vector/20200614/ourmid/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg',
      username: 'newsyr',
      created_at: '8h',
      posts: [
        {
          title: 'Draw an iceberg and see how it would float in water https://joshdata.me/iceberger.html',
          reacted: {
            reply: 1,
            retweet: 19,
            like: 47,
            share: 0
          }
        }
      ]
    },
    {
      name: 'Suz Hinton',
      avatar: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      username: 'noopkat',
      created_at: '14h',
      posts: [
        {
          title: '"/do you think x developer tool will still be around in 20 years?"/ me: goes on tangent about the computer literacy of citizens as key to future civil rights',
          reacted: {
            reply: 10,
            retweet: 18,
            like: 180,
            share: 0  
          }
        }
      ]
    },
    {
      name: 'Hat-dog',
      avatar: 'https://pixelmator.com/community/download/file.php?avatar=17785_1569233053.png',
      username: 'HatJod',
      created_at: '23m',
      posts: [
        {
          title: 'R1D5 done-ish with the front end, would now fix the middleware to connect to the backend #100DaysofX #100DaysofCode',
          reacted: {
            reply: 0,
            retweet: 2,
            like: 1,
            share: 0  
          }
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div className="divide-y divide-gray-100 w-full">
        { users.map((user, i) => (
          <div key={i} className="flex justify-start px-4 py-3 space-x-3 hover:bg-gray-50 transition ease-in-out duration-300 cursor-pointer">
            <div className="flex-shrink-0">
              <img className="w-12 h-12 rounded-full" src={ user.avatar } />
            </div>
            <div className="flex flex-col w-full -m-2">
              <div className="flex items-center justify-between text-base text-gray-500">
                <div className="flex items-center space-x-1">
                  <a href="#" className="font-semibold text-gray-900 hover:underline clamp-1">{ user.name }</a>
                  <a href="#" className="clamp-1">@{ user.username } &middot; <span className="hover:underline">{ user.created_at }</span></a>
                </div>
                <div className="flex-shrink-0 -mx-2">
                  <button className="p-2 rounded-full focus:bg-twitter-active hover:text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle>
                      <circle cx="19" cy="12" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-base -my-0.5 pb-2 text-gray-700">
                {user.posts.map(({ title }, p) => (
                  <span key={p} className="whitespace-pre-wrap">
                    { title }
                  </span>
                ))}
              </div>
            </div>  
          </div>
        ))}
      </div>
    </>
  )
}

HomePage.headerOptions = (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center">
      <span className="ml-6 text-lg font-extrabold">Home</span>
    </div>
    <div className="-mx-2">
      <button className="flex-shrink-0 p-2 rounded-full focus:bg-twitter-active text-twitter-blue focus:text-twitter-blue hover:bg-blue-50 focus:outline-none transition ease-in-out duration-200">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      </button>
    </div>
  </div>
)