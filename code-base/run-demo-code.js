

const todayShiftDays = (amount=0, date=new Date()) => {
    const [
      tzOff,
      d
    ] = [
      date.getTimezoneOffset() * 60 * 1000,
      new Date()
    ];

    let [t, tzOff2] = [
      date.getTime()
    ]

    t += (1000 * 60 * 60 * 24) * amount;
    d.setTime(t);

    tzOff2 = d.getTimezoneOffset() * 60 * 1000;
    if (tzOff != tzOff2) {
      let diff = tzOff2 - tzOff;
      t += diff;
      d.setTime(t);
    }

    return d
}
