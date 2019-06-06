sightings = [
    {report: 673,
    info: "Campers encounter just after dark in the Wrangell
     St. Elias National Park and Preserve",
    lat: 61.5,
    long: -142.9,
    user_id: 1},
     
     {report: 211,
    info: "Daylight sighting by a hunter east of Alberta Hwy 22,
     near Hwy 532",
    lat: 50.4023,
    long: -114.3957,
    user_id: 1},

    {report: 726,
    info: "A hitchhiker reports seeing a bigfoot in 
    a forested area off U.S. 441",
    lat: 29.0599,
    long: -82.05835,
    user_id: 1},

    {report: 47378,
    info: "Memory told of a close nighttime encounter while
     hunting rabbits in a rural backyard near Palm Harbor",
    lat: 28.09538,
    long: -82.74918,
    user_id: 1},

    {report: 577,
    info: "Man has repeated visits at family farm",
    lat: 34.80405,
    long: -87.50905,
    user_id: 1},

    {report: 420,
     info: "Sunnyvale resident, Bubbles encounter what he believed to be a god damn Samsquanch",
     lat: 44.647210,
     long: -63.537701,
     user_id: 1},
]
sightings.each do |sighting_data|
    Sighting.create(sighting_data)
  end

  
user1 = User.create({
    username: "john"
})

post1 = Post.create({
    post: "Did you see bigfoot?",
    user_id: 1
})

comment1 = Comment.create({
    comment: "I saw bigfoot!",
    user_id: 2
})

  