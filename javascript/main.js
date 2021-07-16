document.querySelector('button').addEventListener('click', check)

function check(){
  const day = document.querySelector('#day').value.toLowerCase()
  const month = document.querySelector('#month').value.toLowerCase()

  const zodiac = document.querySelector('#zodiac')
  const horoscope = document.querySelector('#horoscope')
  
  const pices = `Your opinions and suggestions will matter in a family situation. There is a distinct possibility of making a short, but interesting, journey. A property issue may need an amicable solution. Keeping abreast of the developments on the academic front will help you in taking timely action. There is a likelihood of winning a lucrative deal. A change on the professional front is likely to benefit you. Health remains excellent, as you put in the required efforts.\n
  Love Focus: Spouse may want your full attention and can make an issue of it.`

  const aquarius = `You are likely to find yourself fit and full of energy today. Domestic front is likely to be infused with an atmosphere of peace and tranquility. You may have problems on the road, so exercise caution. Time seems favorable for purchasing property. Someone who had borrowed money from you will return it. You will be able to manage something difficult on the professional front and add to your reputation.\n
  Love Focus: You may get deeply involved in a romantic affair.`

  const aries = `A difficult task at work can tie you up in knots, but perseverance will pay. Mental stress plaguing some is set to disappear. Someone may default in repaying you a loaned amount. A trip will enable you to meet people you have not met for long. Things start moving your way on the academic front.\n
  You may be reluctant to do what you are duty bound to. Family will be supportive of your ideas, but only to an extent.\n
  Love Focus: Making a plan together with partner will add to your enjoyment.`

  const taurus = `Previous investments are likely to give excellent results. Enjoying an out of town family trip is foreseen and will help you let your hair down. Nothing can stop those aiming to achieve something specific. Don’t disappoint anyone expecting your help on the social front. Gaining success in an important competition is indicated. Your excellent negotiating skills are likely to win the day for you.\n
  Love Focus: Expect romance to remain most fulfilling.`

  const gemini = `Today you may implement some new ideas on the professional front. You will find yourself fit and energetic. Avoid letting a family dispute take an ugly turn. It is best not to take up anything related to property today. A business trip, though hectic, will bring success in its wake. It is best not to take up anything related to property today. This is an excellent time to earn big bucks as opportunities come your way.\n
  Love Focus: Your loving and caring nature will make a positive impact on your love life.`

  const cancer = `Some of you can derive much benefit by joining fitness classes. Family can get irritated by your unreasonable demands. It is an auspicious time for those wishing to set out on a pilgrimage. A property dispute may end amicably.\n
  You will be able to tap some more avenues for earning. You will find your luck shining on both the personal and professional fronts.\n
  Love Focus: Someone may send positive signals on the romantic front.`

  const leo = `An outstanding performance at work is likely to bring you to the notice of higher ups. Those working for a social cause may get hard pressed for funds. Parents or elders may insist on doing something that you don’t approve of.\n
  You may have to take the initiative in your own hands, if you want things to happen your way. Extra workload will be tackled most efficiently on the professional or academic front.\n
  Love Focus: Those in love are set to take romance to the next level.`

  const virgo = `Your desire to travel abroad to meet someone special may see the light of the day soon. An arrear is likely to be received and make your bank balance healthy. You remain active on the social front. On the professional front, you may find things turning favourable. Someone is likely to praise your achievements in your sphere of activities.\n
  Love Focus: Love life may enter a turbulent phase.`

  const libra = `An exciting overseas trip is in the offing for some. Positive signs emerge for those trying to acquire property. Gaining an edge over rivals is possible on the academic front. Good investments will keep the monetary front strong. A tough time on the professional front is foreseen for actors and models. A health initiative will prove beneficial. A good understanding is assured for the newlyweds.\n
  Love Focus: Love life promises to give immense fulfilment.`

  const scorpio = `Someone close will help you in sorting things out on the domestic front. You may plan to embark on a pilgrimage for rest and rejuvenation. Something concerning property will work out in your favour. You will earn well and get the opportunity to splurge to your heart’s content. You may get into an awkward situation at work over an issue, if you are not careful. Problems faced on the health front show sign of disappearing completely.\n
  Love Focus: Those going steady may decide to cement their relationship by exchanging wedding vows.`

  const sagittarius = `Fame and recognition is yours for the asking on the social front, as you get praised for your efforts. Your request for salary hike may get a sympathetic hearing. Money loaned to someone will be promptly returned. Meeting old friends may make you nostalgic and bring fond memories back. This is certainly a day when you achieve something extraordinary. You will be in a forgiving mood, even if someone gets on your wrong side.\n
  Love Focus: Someone special may come to meet you and brighten up the romantic front.`

  const capricorn = `Someone may repose full confidence in your handling of a workplace situation. Tough competition on the academic front may prod you to give your best. Freedom from a minor ailment is indicated. Domestic front appears harmonious, but someone may disturb your routine by arriving unannounced. A favourable day is foreseen as far as your financial situation is concerned. Praise from those who matter is likely to make your day on the social front.\n
  Love Focus: Romantic mood prevails, so expect a scintillating time with partner!`

  if(day < 1 || day > 31){
    alert('Please valid birth date')
  }else if(month === 'january' && day >= 20 || month === 'february' && day <= 18){
    zodiac.innerText = 'Aquarius'
    zodiac.classList.add('p1bg')
    horoscope.innerText = aquarius
    horoscope.classList.add('pbg')
  }else if (month === 'february' && day >= 19 || month === 'march' && day <= 20){
    zodiac.innerText = 'Pices'
    zodiac.classList.add('p1bg')
    horoscope.innerText = pices
    horoscope.classList.add('pbg')
  }else if (month === 'march' && day >= 21 || month === 'april' && day <= 19){
    zodiac.innerText = 'Aries'
    zodiac.classList.add('p1bg')
    horoscope.innerText = aries
    horoscope.classList.add('pbg')
  }else if (month === 'april' && day >= 20 || month === 'may' && day <= 20){
    zodiac.innerText = 'Taurus'
    zodiac.classList.add('p1bg')
    horoscope.innerText = taurus
    horoscope.classList.add('pbg')
  }else if (month === 'may' && day >= 21 || month === 'june' && day <= 20){
    zodiac.innerText = 'Gemini'
    zodiac.classList.add('p1bg')
    horoscope.innerText = gemini
    horoscope.classList.add('pbg')
  }else if (month === 'june' && day >= 21 || month === 'july' && day <= 22){
    zodiac.innerText = 'Cancer'
    zodiac.classList.add('p1bg')
    horoscope.innerText = cancer
    horoscope.classList.add('pbg')
  }else if (month === 'july' && day >= 23 || month === 'august' && day <= 22){
    zodiac.innerText = 'Leo'
    zodiac.classList.add('p1bg')
    horoscope.innerText = leo
    horoscope.classList.add('pbg')
  }else if (month === 'august' && day >= 23 || month === 'september' && day <= 22){
    zodiac.innerText = 'Virgo'
    zodiac.classList.add('p1bg')
    horoscope.innerText = virgo
    horoscope.classList.add('pbg')
  }else if (month === 'september' && day >= 23 || month === 'october' && day <= 22){
    zodiac.innerText = 'Libra'
    zodiac.classList.add('p1bg')
    horoscope.innerText = libra
    horoscope.classList.add('pbg')
  }else if (month === 'october' && day >= 23 || month === 'november' && day <= 21){
    zodiac.innerText = 'Scorpio'
    zodiac.classList.add('p1bg')
    horoscope.innerText = scorpio
    horoscope.classList.add('pbg')
  }else if (month === 'november' && day >= 22 || month === 'december' && day <= 21){
    zodiac.innerText = 'Sagittarius'
    zodiac.classList.add('p1bg')
    horoscope.innerText = sagittarius
    horoscope.classList.add('pbg')
  }else if (month === 'december' && day >= 22 || month === 'january' && day <= 19){
    zodiac.innerText = 'Capricorn'
    zodiac.classList.add('p1bg')
    horoscope.innerText = capricorn
    horoscope.classList.add('pbg')
  }else{
    alert('Please valid birth date')
  }
}