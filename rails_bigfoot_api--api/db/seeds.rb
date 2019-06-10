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
     info: "Sunnyvale resident, Bubbles encountered what he believed to be a god damn Samsquanch",
     lat: 44.647210,
     long: -63.537701,
     user_id: 1},

    {report: 1356,
        info: "Husband and wife observe sasquatch at river's edge",
        lat: 38.655,
        long: -90.675,
        user_id: 1},

    {report: 3332,
        info: "Motorist slams on his brakes when a 4-5' brown shaggy creature steps in front of his car near Hendersonville",
        lat: 35.33975,
        long: -82.443,
        user_id: 1},
    
    {report: 3293,
        info: "Three fox hunters witness a `Freak of nature bear` step over a fence and walk into a thicket.",
        lat: 40.4764,
        long: -82.80257 ,
        user_id: 1},

    {report: 8083,
        info: "Boy encounters bigfoot while fishing on a pond just north of Detroit",
        lat: 33.66666,
        long: -95.27361,
        user_id: 1},

    {report: 24052,
        info: " Man recounts boyhood experience of hearing a terrifying scream while hunting near the San Pedro River",
        lat: 31.63,
        long: -110.177,
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

  