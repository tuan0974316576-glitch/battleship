const VOCAB_DB = {
    "L1": [
        {
            en: "ant",
            ch: "螞蟻 (n.)",
            sents: [
                { text: "The ant is carrying a crumb.", answer: "ant" },
                { text: "Ants work together as a team.", answer: "Ants" },
                { text: "I saw an ant on the table.", answer: "ant" },
                { text: "There are many ants in the garden.", answer: "ants" },
                { text: "The ant climbed up the wall.", answer: "ant" },
                { text: "Ants are very strong for their size.", answer: "Ants" },
                { text: "An ant can lift things heavier than itself.", answer: "ant" },
                { text: "The ants are building a nest.", answer: "ants" },
                { text: "Don't step on the ant!", answer: "ant" },
                { text: "Ants like sweet food.", answer: "Ants" }
            ]
        },
        {
            en: "about",
            ch: "關於 (prep.)",
            sents: [
                { text: "Tell me about your family.", answer: "about" },
                { text: "What is this book about?", answer: "about" },
                { text: "I am thinking about my future.", answer: "about" },
                { text: "He told a story about a brave dog.", answer: "about" },
                { text: "I don't know much about art.", answer: "about" },
                { text: "We talked about the movie for hours.", answer: "about" },
                { text: "She wrote a song about her cat.", answer: "about" },
                { text: "There is something special about this place.", answer: "about" },
                { text: "Are you worried about the test?", answer: "about" },
                { text: "I'm sorry about what happened.", answer: "about" }
            ]
        },
        {
            en: "above",
            ch: "在...上面 (prep.)",
            sents: [
                { text: "The birds are flying above the trees.", answer: "above" },
                { text: "We live in the apartment above the bakery.", answer: "above" },
                { text: "The sun rose above the horizon.", answer: "above" },
                { text: "Keep your head above water.", answer: "above" },
                { text: "Put the clock above the door.", answer: "above" },
                { text: "A bridge was built above the river.", answer: "above" },
                { text: "The stars are shining above us.", answer: "above" },
                { text: "My name is listed above yours.", answer: "above" },
                { text: "Temperatures are above average today.", answer: "above" },
                { text: "He raised his hands above his head.", answer: "above" }
            ]
        },
        {
            en: "across",
            ch: "橫過 (prep.)",
            sents: [
                { text: "We walked across the street.", answer: "across" },
                { text: "The cat ran across the garden.", answer: "across" },
                { text: "He swam across the river.", answer: "across" },
                { text: "There is a bridge across the stream.", answer: "across" },
                { text: "They live across the road from us.", answer: "across" },
                { text: "Draw a line across the paper.", answer: "across" },
                { text: "She looked across the room at him.", answer: "across" },
                { text: "The shop is just across the hallway.", answer: "across" },
                { text: "We flew across the ocean.", answer: "across" },
                { text: "A shadow fell across the floor.", answer: "across" }
            ]
        },
        {
            en: "action",
            ch: "行動 (n.)",
            sents: [
                { text: "Actions speak louder than words.", answer: "Actions" },
                { text: "We need to take action now.", answer: "action" },
                { text: "I like watching action movies.", answer: "action" },
                { text: "The police took quick action.", answer: "action" },
                { text: "He is a man of action.", answer: "action" },
                { text: "Every action has a reaction.", answer: "action" },
                { text: "The hero is ready for action.", answer: "action" },
                { text: "I enjoyed the action in the game.", answer: "action" },
                { text: "She filmed the action with her camera.", answer: "action" },
                { text: "We saw the plan in action today.", answer: "action" }
            ]
        },
        {
            en: "activity",
            ch: "活動 (n.)",
            sents: [
                { text: "Swimming is my favorite summer activity.", answer: "activity" },
                { text: "There are many activities for kids here.", answer: "activity" },
                { text: "School activities start at 4 PM.", answer: "activity" },
                { text: "Regular physical activity is healthy.", answer: "activity" },
                { text: "What is your favorite outdoor activity?", answer: "activity" },
                { text: "The classroom was full of activity.", answer: "activity" },
                { text: "We planned a fun activity for the weekend.", answer: "activity" },
                { text: "She enjoys creative activities like painting.", answer: "activity" },
                { text: "The festival has many musical activities.", answer: "activity" },
                { text: "Volleyball is a popular team activity.", answer: "activity" }
            ]
        },
        {
            en: "actor",
            ch: "男演員 (n.)",
            sents: [
                { text: "He is a very famous Hollywood actor.", answer: "actor" },
                { text: "The actor forgot his lines on stage.", answer: "actor" },
                { text: "I want to be an actor when I grow up.", answer: "actor" },
                { text: "The lead actor was very handsome.", answer: "actor" },
                { text: "She talked to her favorite actor today.", answer: "actor" },
                { text: "Being an actor requires a lot of practice.", answer: "actor" },
                { text: "The actor smiled for the fans.", answer: "actor" },
                { text: "He won an award for best actor.", answer: "actor" },
                { text: "The actor performed his own stunts.", answer: "actor" },
                { text: "Which actor do you like the most?", answer: "actor" }
            ]
        },
        {
            en: "actress",
            ch: "女演員 (n.)",
            sents: [
                { text: "The actress wore a beautiful red dress.", answer: "actress" },
                { text: "She is a talented young actress.", answer: "actress" },
                { text: "The actress played the role of a queen.", answer: "actress" },
                { text: "I saw a famous actress at the mall.", answer: "actress" },
                { text: "The actress thanked her family in her speech.", answer: "actress" },
                { text: "She wants to become a stage actress.", answer: "actress" },
                { text: "The actress has a very expressive face.", answer: "actress" },
                { text: "Many young girls admire that actress.", answer: "actress" },
                { text: "The actress signed an autograph for me.", answer: "actress" },
                { text: "She is the highest-paid actress this year.", answer: "actress" }
            ]
        },
        {
            en: "add",
            ch: "增加 (v.)",
            sents: [
                { text: "Please add some salt to the soup.", answer: "add" },
                { text: "Can you add my name to the list?", answer: "add" },
                { text: "Add 5 and 3 to get 8.", answer: "Add" },
                { text: "Do you want to add sugar to your coffee?", answer: "add" },
                { text: "This will add more color to the room.", answer: "add" },
                { text: "I need to add some money to my account.", answer: "add" },
                { text: "Don't forget to add your signature.", answer: "add" },
                { text: "She added some flowers to the vase.", answer: "added" },
                { text: "We should add more details to the plan.", answer: "add" },
                { text: "He added a few words at the end.", answer: "added" }
            ]
        },
        {
            en: "address",
            ch: "地址 (n.)",
            sents: [
                { text: "What is your home address?", answer: "address" },
                { text: "Please write your address on this form.", answer: "address" },
                { text: "I forgot to ask for her email address.", answer: "address" },
                { text: "This is the wrong address for the shop.", answer: "address" },
                { text: "He changed his address last month.", answer: "address" },
                { text: "Do you have the address of the hotel?", answer: "address" },
                { text: "The letter was sent to the old address.", answer: "address" },
                { text: "Tell the driver your destination address.", answer: "address" },
                { text: "Please check if the address is correct.", answer: "address" },
                { text: "I can't find your address on the map.", answer: "address" }
            ]
        },
        {
            en: "adult",
            ch: "成年人 (n.)",
            sents: [
                { text: "Tickets for adults cost ten dollars.", answer: "adults" },
                { text: "This movie is for adults only.", answer: "adults" },
                { text: "She is now a responsible adult.", answer: "adult" },
                { text: "Adults should set a good example.", answer: "Adults" },
                { text: "I am the only adult in the room.", answer: "adult" },
                { text: "Being an adult can be difficult sometimes.", answer: "adult" },
                { text: "He acts like a child, but he is an adult.", answer: "adult" },
                { text: "The cat is now a full-grown adult.", answer: "adult" },
                { text: "We need an adult to help us.", answer: "adult" },
                { text: "Life as an adult is very busy.", answer: "adult" }
            ]
        },
        {
            en: "advice",
            ch: "建議 (n.)",
            sents: [
                { text: "Can you give me some advice?", answer: "advice" },
                { text: "My teacher gave me good advice today.", answer: "advice" },
                { text: "Listen to your parents' advice.", answer: "advice" },
                { text: "I need some advice on buying a bike.", answer: "advice" },
                { text: "Thank you for your useful advice.", answer: "advice" },
                { text: "What is your advice for the test?", answer: "advice" },
                { text: "He ignored my advice and got lost.", answer: "advice" },
                { text: "She always asks her brother for advice.", answer: "advice" },
                { text: "I followed my doctor's advice.", answer: "advice" },
                { text: "Let me give you a piece of advice.", answer: "advice" }
            ]
        },
        {
            en: "afraid",
            ch: "害怕 (adj.)",
            sents: [
                { text: "Don't be afraid of the dark.", answer: "afraid" },
                { text: "She is afraid of big dogs.", answer: "afraid" },
                { text: "Are you afraid of spiders?", answer: "afraid" },
                { text: "I am afraid that I might fail.", answer: "afraid" },
                { text: "The little boy was afraid to jump.", answer: "afraid" },
                { text: "There is nothing to be afraid of.", answer: "afraid" },
                { text: "He is not afraid of anything.", answer: "afraid" },
                { text: "I'm afraid I can't help you today.", answer: "afraid" },
                { text: "The cat was afraid of the loud noise.", answer: "afraid" },
                { text: "She looked afraid when she saw the snake.", answer: "afraid" }
            ]
        },
        {
            en: "after",
            ch: "在...之後 (prep.)",
            sents: [
                { text: "We can play games after dinner.", answer: "after" },
                { text: "See you after school!", answer: "after" },
                { text: "Brush your teeth after eating.", answer: "after" },
                { text: "What happened after the movie?", answer: "after" },
                { text: "I will call you after 6 PM.", answer: "after" },
                { text: "She arrived after the bus left.", answer: "after" },
                { text: "The cat ran after the mouse.", answer: "after" },
                { text: "Put the books back after you read them.", answer: "after" },
                { text: "He felt better after a short rest.", answer: "after" },
                { text: "One after another, the students left.", answer: "after" }
            ]
        },
        {
            en: "afternoon",
            ch: "下午 (n.)",
            sents: [
                { text: "I am busy this afternoon.", answer: "afternoon" },
                { text: "Good afternoon, everyone!", answer: "afternoon" },
                { text: "We go to the park every afternoon.", answer: "afternoon" },
                { text: "It was a sunny afternoon.", answer: "afternoon" },
                { text: "What are you doing on Sunday afternoon?", answer: "afternoon" },
                { text: "The store closes in the afternoon.", answer: "afternoon" },
                { text: "I like to sleep in the afternoon.", answer: "afternoon" },
                { text: "We had tea together this afternoon.", answer: "afternoon" },
                { text: "She does her homework in the afternoon.", answer: "afternoon" },
                { text: "The light is beautiful in the late afternoon.", answer: "afternoon" }
            ]
        },
        {
            en: "again",
            ch: "再一次 (adv.)",
            sents: [
                { text: "Can you say that again?", answer: "again" },
                { text: "Try again and you will succeed.", answer: "again" },
                { text: "I am happy to see you again.", answer: "again" },
                { text: "It is raining again today.", answer: "again" },
                { text: "Don't do that ever again.", answer: "again" },
                { text: "Please read the sentence again.", answer: "again" },
                { text: "The bird flew away and came back again.", answer: "again" },
                { text: "She failed, but she tried again.", answer: "again" },
                { text: "I forgot my keys again.", answer: "again" },
                { text: "When will we meet again?", answer: "again" }
            ]
        },
        {
            en: "age",
            ch: "年齡 (n.)",
            sents: [
                { text: "What is your age?", answer: "age" },
                { text: "Children under the age of five are free.", answer: "age" },
                { text: "He is the same age as me.", answer: "age" },
                { text: "At the age of ten, she could play piano.", answer: "age" },
                { text: "I don't know his exact age.", answer: "age" },
                { text: "Age is just a number.", answer: "Age" },
                { text: "They are both about the same age.", answer: "age" },
                { text: "Please write your age on the form.", answer: "age" },
                { text: "He started school at an early age.", answer: "age" },
                { text: "Grandpa is still very active for his age.", answer: "age" }
            ]
        },
        {
            en: "ago",
            ch: "以前 (adv.)",
            sents: [
                { text: "I finished my work an hour ago.", answer: "ago" },
                { text: "Long ago, there lived a king.", answer: "ago" },
                { text: "We met three years ago.", answer: "ago" },
                { text: "The bus left two minutes ago.", answer: "ago" },
                { text: "He moved to Tokyo a month ago.", answer: "ago" },
                { text: "It happened a long time ago.", answer: "ago" },
                { text: "I saw her a few days ago.", answer: "ago" },
                { text: "The restaurant opened ten years ago.", answer: "ago" },
                { text: "She left the office a moment ago.", answer: "ago" },
                { text: "How long ago was the party?", answer: "ago" }
            ]
        },
        {
            en: "agree",
            ch: "同意 (v.)",
            sents: [
                { text: "I agree with your plan.", answer: "agree" },
                { text: "Do you agree with me?", answer: "agree" },
                { text: "They finally agreed on a price.", answer: "agreed" },
                { text: "We all agree that the food is great.", answer: "agree" },
                { text: "I don't agree with his opinion.", answer: "agree" },
                { text: "She agreed to help us tomorrow.", answer: "agreed" },
                { text: "He smiled to show he agreed.", answer: "agreed" },
                { text: "The boss agreed to the change.", answer: "agreed" },
                { text: "We can't agree on which movie to watch.", answer: "agree" },
                { text: "I think everyone will agree.", answer: "agree" }
            ]
        },
        {
            en: "air",
            ch: "空氣 (n.)",
            sents: [
                { text: "I love the fresh air in the morning.", answer: "air" },
                { text: "Open the window for some fresh air.", answer: "air" },
                { text: "The air is cold today.", answer: "air" },
                { text: "Birds fly in the air.", answer: "air" },
                { text: "We need air to breathe.", answer: "air" },
                { text: "The air was full of the smell of flowers.", answer: "air" },
                { text: "There is no air in space.", answer: "air" },
                { text: "He kicked the ball high into the air.", answer: "air" },
                { text: "Let's go outside for some air.", answer: "air" },
                { text: "The mountain air is very clean.", answer: "air" }
            ]
        },
        {
            en: "airport",
            ch: "機場 (n.)",
            sents: [
                { text: "We are going to the airport now.", answer: "airport" },
                { text: "The airport is far from the city.", answer: "airport" },
                { text: "He works at the international airport.", answer: "airport" },
                { text: "Please meet me at the airport gate.", answer: "airport" },
                { text: "The airport was very crowded.", answer: "airport" },
                { text: "What time do we need to be at the airport?", answer: "airport" },
                { text: "There is a bus to the airport.", answer: "airport" },
                { text: "I saw many planes at the airport.", answer: "airport" },
                { text: "She is waiting for her friend at the airport.", answer: "airport" },
                { text: "The airport has many shops.", answer: "airport" }
            ]
        },
        {
            en: "all",
            ch: "全部 (det.)",
            sents: [
                { text: "All the students are in the class.", answer: "All" },
                { text: "I ate all the cookies.", answer: "all" },
                { text: "Is that all you want to say?", answer: "all" },
                { text: "All of my friends are coming.", answer: "All" },
                { text: "She worked all day yesterday.", answer: "all" },
                { text: "We are all ready to go.", answer: "all" },
                { text: "All the lights were turned off.", answer: "All" },
                { text: "Thank you for all your help.", answer: "all" },
                { text: "All children love toys.", answer: "All" },
                { text: "I have all the information I need.", answer: "all" }
            ]
        },
        {
            en: "also",
            ch: "也 (adv.)",
            sents: [
                { text: "I like pizza, and I also like pasta.", answer: "also" },
                { text: "She speaks English and also French.", answer: "also" },
                { text: "He is a doctor and also a writer.", answer: "also" },
                { text: "I was also there last night.", answer: "also" },
                { text: "The room is big and also very bright.", answer: "also" },
                { text: "Please bring the book, and also the pen.", answer: "also" },
                { text: "She is smart and also very kind.", answer: "also" },
                { text: "I also want to go to Japan.", answer: "also" },
                { text: "The movie was long, but also exciting.", answer: "also" },
                { text: "He can sing and he also plays guitar.", answer: "also" }
            ]
        },
        {
            en: "always",
            ch: "總是 (adv.)",
            sents: [
                { text: "I always brush my teeth at night.", answer: "always" },
                { text: "The sun always rises in the east.", answer: "always" },
                { text: "She is always happy to help.", answer: "always" },
                { text: "You are always late for class!", answer: "always" },
                { text: "I will always remember this day.", answer: "always" },
                { text: "My mom always cooks delicious food.", answer: "always" },
                { text: "He always wears a red hat.", answer: "always" },
                { text: "We always go for a walk after dinner.", answer: "always" },
                { text: "I always try my best.", answer: "always" },
                { text: "It is always cold in this room.", answer: "always" }
            ]
        },
        {
            en: "amazing",
            ch: "驚人的 (adj.)",
            sents: [
                { text: "The view from the mountain is amazing.", answer: "amazing" },
                { text: "You did an amazing job!", answer: "amazing" },
                { text: "That movie was absolutely amazing.", answer: "amazing" },
                { text: "She has an amazing voice.", answer: "amazing" },
                { text: "The food at the party was amazing.", answer: "amazing" },
                { text: "It is amazing how fast he runs.", answer: "amazing" },
                { text: "We had an amazing time in Nagoya.", answer: "amazing" },
                { text: "Look at that amazing sunset!", answer: "amazing" },
                { text: "The magician did some amazing tricks.", answer: "amazing" },
                { text: "It's amazing that you finished so early.", answer: "amazing" }
            ]
        },
        {
            en: "and",
            ch: "和 (conj.)",
            sents: [
                { text: "I like apples and bananas.", answer: "and" },
                { text: "Tom and Jerry are famous characters.", answer: "and" },
                { text: "Please sit down and be quiet.", answer: "and" },
                { text: "She can sing and dance.", answer: "and" },
                { text: "I have a pen and a notebook.", answer: "and" },
                { text: "The weather is hot and sunny.", answer: "and" },
                { text: "Bread and butter is a simple meal.", answer: "and" },
                { text: "My dad and I went fishing.", answer: "and" },
                { text: "Listen and repeat after me.", answer: "and" },
                { text: "He opened the door and walked in.", answer: "and" }
            ]
        },
        {
            en: "angry",
            ch: "生氣 (adj.)",
            sents: [
                { text: "My mom was angry because I was late.", answer: "angry" },
                { text: "Don't be angry with me.", answer: "angry" },
                { text: "He looked very angry this morning.", answer: "angry" },
                { text: "Why are you so angry?", answer: "angry" },
                { text: "The angry man shouted loudly.", answer: "angry" },
                { text: "She was angry at the broken window.", answer: "angry" },
                { text: "I feel angry when people are mean.", answer: "angry" },
                { text: "He tried not to look angry.", answer: "angry" },
                { text: "The cat gets angry if you touch its tail.", answer: "angry" },
                { text: "She made an angry face.", answer: "angry" }
            ]
        },
        {
            en: "animal",
            ch: "動物 (n.)",
            sents: [
                { text: "The lion is a wild animal.", answer: "animal" },
                { text: "I love all kinds of animals.", answer: "animals" },
                { text: "What is your favorite animal?", answer: "animal" },
                { text: "We saw many animals at the zoo.", answer: "animals" },
                { text: "A dog is a very loyal animal.", answer: "animal" },
                { text: "Some animals sleep during the day.", answer: "animals" },
                { text: "Don't hurt the little animal.", answer: "animal" },
                { text: "She wants to work with animals.", answer: "animals" },
                { text: "Farm animals include cows and pigs.", answer: "animals" },
                { text: "The cat is a very clean animal.", answer: "animal" }
            ]
        },
        {
            en: "another",
            ch: "另一個 (det.)",
            sents: [
                { text: "Can I have another cup of water?", answer: "another" },
                { text: "This pen is broken, give me another one.", answer: "another" },
                { text: "We will try again another day.", answer: "another" },
                { text: "I need another ten minutes.", answer: "another" },
                { text: "She bought another pair of shoes.", answer: "another" },
                { text: "Let's move to another room.", answer: "another" },
                { text: "He ate one cookie, then another.", answer: "another" },
                { text: "Is there another way to get there?", answer: "another" },
                { text: "I want to see another movie.", answer: "another" },
                { text: "She is looking for another job.", answer: "another" }
            ]
        },
        {
            en: "answer",
            ch: "回答 (n.)",
            sents: [
                { text: "I don't know the answer to the question.", answer: "answer" },
                { text: "Please give me your answer tomorrow.", answer: "answer" },
                { text: "His answer was correct.", answer: "answer" },
                { text: "She didn't give a clear answer.", answer: "answer" },
                { text: "Wait for my answer before you go.", answer: "answer" },
                { text: "The answer is simple.", answer: "answer" },
                { text: "Is that your final answer?", answer: "answer" },
                { text: "I am waiting for an answer to my email.", answer: "answer" },
                { text: "There is no easy answer to this problem.", answer: "answer" },
                { text: "Write your answer on the paper.", answer: "answer" }
            ]
        },
        {
            en: "any",
            ch: "任何 (det.)",
            sents: [
                { text: "Do you have any questions?", answer: "any" },
                { text: "I don't have any money.", answer: "any" },
                { text: "You can choose any color you like.", answer: "any" },
                { text: "Is there any milk in the fridge?", answer: "any" },
                { text: "Any child can do this.", answer: "Any" },
                { text: "I don't need any help.", answer: "any" },
                { text: "Do you have any brothers or sisters?", answer: "any" },
                { text: "Call me if you have any problems.", answer: "any" },
                { text: "She didn't make any mistakes.", answer: "any" },
                { text: "You can come at any time.", answer: "any" }
            ]
        },
        {
            en: "anyone",
            ch: "任何人 (pron.)",
            sents: [
                { text: "Does anyone have a pen?", answer: "anyone" },
                { text: "Anyone can join the club.", answer: "Anyone" },
                { text: "I didn't see anyone I knew at the party.", answer: "anyone" },
                { text: "Is anyone home?", answer: "anyone" },
                { text: "Has anyone seen my keys?", answer: "anyone" },
                { text: "I don't think anyone is coming.", answer: "anyone" },
                { text: "Can anyone answer this question?", answer: "anyone" },
                { text: "If anyone calls, tell them I'm busy.", answer: "anyone" },
                { text: "You can ask anyone for directions.", answer: "anyone" },
                { text: "Anyone who likes music will love this.", answer: "Anyone" }
            ]
        },
        {
            en: "anything",
            ch: "任何事物 (pron.)",
            sents: [
                { text: "Is there anything in the box?", answer: "anything" },
                { text: "You can eat anything you want.", answer: "anything" },
                { text: "I don't have anything to do today.", answer: "anything" },
                { text: "Did anything happen while I was out?", answer: "anything" },
                { text: "I can't see anything without my glasses.", answer: "anything" },
                { text: "Is there anything else you need?", answer: "anything" },
                { text: "He will do anything for his friends.", answer: "anything" },
                { text: "Don't worry about anything.", answer: "anything" },
                { text: "I'm so hungry I could eat anything.", answer: "anything" },
                { text: "Is anything wrong?", answer: "anything" }
            ]
        },
        {
            en: "apartment",
            ch: "公寓 (n.)",
            sents: [
                { text: "I live in a small apartment in Tsuen Wan.", answer: "apartment" },
                { text: "Her apartment is on the fifth floor.", answer: "apartment" },
                { text: "They are looking for a new apartment.", answer: "apartment" },
                { text: "The apartment has a beautiful view.", answer: "apartment" },
                { text: "How much is the rent for this apartment?", answer: "apartment" },
                { text: "We share a three-bedroom apartment.", answer: "apartment" },
                { text: "The apartment building is very old.", answer: "apartment" },
                { text: "He invited us to his apartment for dinner.", answer: "apartment" },
                { text: "Our apartment is close to the MTR station.", answer: "apartment" },
                { text: "I need to clean my apartment this weekend.", answer: "apartment" }
            ]
        },
        {
            en: "apple",
            ch: "蘋果 (n.)",
            sents: [
                { text: "An apple a day keeps the doctor away.", answer: "apple" },
                { text: "I like to eat a red apple for breakfast.", answer: "apple" },
                { text: "She is peeling an apple.", answer: "apple" },
                { text: "Would you like an apple?", answer: "apple" },
                { text: "The apple is sweet and crunchy.", answer: "apple" },
                { text: "I bought a bag of apples at the market.", answer: "apples" },
                { text: "He bit into a juicy green apple.", answer: "apple" },
                { text: "We made an apple pie yesterday.", answer: "apple" },
                { text: "There is an apple on the table.", answer: "apple" },
                { text: "Apples are good for your health.", answer: "Apples" }
            ]
        },
        {
            en: "April",
            ch: "四月 (n.)",
            sents: [
                { text: "My birthday is in April.", answer: "April" },
                { text: "April is the fourth month of the year.", answer: "April" },
                { text: "It often rains in April.", answer: "April" },
                { text: "Easter usually falls in April.", answer: "April" },
                { text: "The flowers start to bloom in April.", answer: "April" },
                { text: "We are going on vacation in April.", answer: "April" },
                { text: "Is it warm in April?", answer: "April" },
                { text: "April Fool's Day is on April 1st.", answer: "April" },
                { text: "School starts again in April.", answer: "April" },
                { text: "I saw her last April.", answer: "April" }
            ]
        },
        {
            en: "area",
            ch: "地區 (n.)",
            sents: [
                { text: "This is a very quiet area.", answer: "area" },
                { text: "There are many shops in this area.", answer: "area" },
                { text: "The play area is for children only.", answer: "area" },
                { text: "What is the total area of the room?", answer: "area" },
                { text: "He knows the area very well.", answer: "area" },
                { text: "We live in a rural area.", answer: "area" },
                { text: "The smoking area is outside.", answer: "area" },
                { text: "There are many parks in our local area.", answer: "area" },
                { text: "The police blocked off the area.", answer: "area" },
                { text: "Is this a safe area to walk at night?", answer: "area" }
            ]
        },
        {
            en: "arm",
            ch: "手臂 (n.)",
            sents: [
                { text: "He broke his arm while playing football.", answer: "arm" },
                { text: "She held the baby in her arms.", answer: "arms" },
                { text: "My arms are tired from carrying bags.", answer: "arms" },
                { text: "Raise your right arm.", answer: "arm" },
                { text: "He has a tattoo on his arm.", answer: "arm" },
                { text: "The cat scratched my arm.", answer: "arm" },
                { text: "She put her arm around my shoulder.", answer: "arm" },
                { text: "He has very strong arms.", answer: "arms" },
                { text: "I felt a pain in my left arm.", answer: "arm" },
                { text: "She crossed her arms and waited.", answer: "arms" }
            ]
        },
        {
            en: "around",
            ch: "在周圍 (prep.)",
            sents: [
                { text: "The earth goes around the sun.", answer: "around" },
                { text: "We walked around the lake.", answer: "around" },
                { text: "Is there a bank around here?", answer: "around" },
                { text: "See you around six o'clock.", answer: "around" },
                { text: "He looked around the room.", answer: "around" },
                { text: "Wait around for a few minutes.", answer: "around" },
                { text: "The children ran around the garden.", answer: "around" },
                { text: "I have lived around the world.", answer: "around" },
                { text: "The wall goes all the way around the house.", answer: "around" },
                { text: "Let's meet around the corner.", answer: "around" }
            ]
        },
        {
            en: "arrive",
            ch: "到達 (v.)",
            sents: [
                { text: "What time does the train arrive?", answer: "arrive" },
                { text: "We arrived at the airport early.", answer: "arrived" },
                { text: "She arrived home late last night.", answer: "arrived" },
                { text: "The package should arrive tomorrow.", answer: "arrive" },
                { text: "He was the first to arrive at the party.", answer: "arrive" },
                { text: "When will the bus arrive?", answer: "arrive" },
                { text: "They arrived in London this morning.", answer: "arrived" },
                { text: "I arrived just in time for the meeting.", answer: "arrived" },
                { text: "Did the guests arrive yet?", answer: "arrive" },
                { text: "The plane arrives at 5 PM.", answer: "arrives" }
            ]
        },
        {
            en: "art",
            ch: "藝術 (n.)",
            sents: [
                { text: "I love studying art at school.", answer: "art" },
                { text: "Do you like modern art?", answer: "art" },
                { text: "She is very good at art.", answer: "art" },
                { text: "The museum has many works of art.", answer: "art" },
                { text: "He is an art teacher.", answer: "art" },
                { text: "Cooking is a form of art.", answer: "art" },
                { text: "We went to an art gallery on Sunday.", answer: "art" },
                { text: "I want to buy some art for my house.", answer: "art" },
                { text: "Art can express many feelings.", answer: "Art" },
                { text: "She won a prize in the art competition.", answer: "art" }
            ]
        },
        {
            en: "article",
            ch: "文章 (n.)",
            sents: [
                { text: "I read an interesting article today.", answer: "article" },
                { text: "He wrote an article for the newspaper.", answer: "article" },
                { text: "Did you see the article about the game?", answer: "article" },
                { text: "This article is very long.", answer: "article" },
                { text: "I need to find an article for my project.", answer: "article" },
                { text: "She published an article in a magazine.", answer: "article" },
                { text: "The article was about healthy eating.", answer: "article" },
                { text: "I agree with the author of this article.", answer: "article" },
                { text: "Can you summarize this article?", answer: "article" },
                { text: "The article contains a lot of information.", answer: "article" }
            ]
        },
        {
            en: "artist",
            ch: "藝術家 (n.)",
            sents: [
                { text: "She is a very talented artist.", answer: "artist" },
                { text: "The artist painted a beautiful sunset.", answer: "artist" },
                { text: "He wants to become a professional artist.", answer: "artist" },
                { text: "The artist's studio was full of colors.", answer: "artist" },
                { text: "We met the artist at the exhibition.", answer: "artist" },
                { text: "Every child is an artist.", answer: "artist" },
                { text: "The artist used oil paints for this work.", answer: "artist" },
                { text: "Who is your favorite artist?", answer: "artist" },
                { text: "The artist drew a portrait of the girl.", answer: "artist" },
                { text: "She works as a makeup artist.", answer: "artist" }
            ]
        },
        {
            en: "as",
            ch: "如同 (prep.)",
            sents: [
                { text: "He works as a doctor.", answer: "as" },
                { text: "She is as tall as her brother.", answer: "as" },
                { text: "Do as I say, not as I do.", answer: "as" },
                { text: "I used the box as a table.", answer: "as" },
                { text: "As you know, today is a holiday.", answer: "As" },
                { text: "He was late, as usual.", answer: "as" },
                { text: "She sang as she walked home.", answer: "as" },
                { text: "As a child, I lived in Tung Chung.", answer: "As" },
                { text: "Please do it as soon as possible.", answer: "as" },
                { text: "The news came as a surprise.", answer: "as" }
            ]
        },
        {
            en: "ask",
            ch: "問 (v.)",
            sents: [
                { text: "Can I ask you a question?", answer: "ask" },
                { text: "Ask your teacher for help.", answer: "Ask" },
                { text: "He asked me for my name.", answer: "asked" },
                { text: "Don't be afraid to ask.", answer: "ask" },
                { text: "I asked her to go to the cinema.", answer: "asked" },
                { text: "She asked about my family.", answer: "asked" },
                { text: "He asked for a glass of water.", answer: "asked" },
                { text: "I will ask the price of the book.", answer: "ask" },
                { text: "They asked us to be quiet.", answer: "asked" },
                { text: "Did you ask him why he was late?", answer: "ask" }
            ]
        },
        {
            en: "at",
            ch: "在 (prep.)",
            sents: [
                { text: "I am at school right now.", answer: "at" },
                { text: "See you at 7 o'clock.", answer: "at" },
                { text: "She is waiting at the bus stop.", answer: "at" },
                { text: "He is good at playing basketball.", answer: "at" },
                { text: "Let's meet at the entrance.", answer: "at" },
                { text: "I was at home all day.", answer: "at" },
                { text: "Look at that beautiful bird!", answer: "at" },
                { text: "She works at a tutorial center.", answer: "at" },
                { text: "The party is at my house.", answer: "at" },
                { text: "I usually wake up at 6 AM.", answer: "at" }
            ]
        },
        {
            en: "August",
            ch: "八月 (n.)",
            sents: [
                { text: "August is the hottest month here.", answer: "August" },
                { text: "We went to Japan last August.", answer: "August" },
                { text: "School starts in late August.", answer: "August" },
                { text: "My sister's wedding is in August.", answer: "August" },
                { text: "It is very humid in August.", answer: "August" },
                { text: "The festival is held every August.", answer: "August" },
                { text: "I am going to a camp in August.", answer: "August" },
                { text: "August has 31 days.", answer: "August" },
                { text: "I met him on an August afternoon.", answer: "August" },
                { text: "The flowers are beautiful in August.", answer: "August" }
            ]
        },
        {
            en: "aunt",
            ch: "阿姨 (n.)",
            sents: [
                { text: "My aunt lives in London.", answer: "aunt" },
                { text: "I am visiting my aunt this weekend.", answer: "aunt" },
                { text: "My aunt is a very good cook.", answer: "aunt" },
                { text: "I have three aunts on my father's side.", answer: "aunts" },
                { text: "My aunt gave me this watch.", answer: "aunt" },
                { text: "Is your aunt coming to the party?", answer: "aunt" },
                { text: "I love spending time with my aunt.", answer: "aunt" },
                { text: "My aunt is my mother's sister.", answer: "aunt" },
                { text: "She looks like her aunt.", answer: "aunt" },
                { text: "Aunt Mary is very kind.", answer: "Aunt" }
            ]
        },
        {
            en: "autumn",
            ch: "秋天 (n.)",
            sents: [
                { text: "I love the cool weather in autumn.", answer: "autumn" },
                { text: "The leaves change color in autumn.", answer: "autumn" },
                { text: "Autumn is my favorite season.", answer: "Autumn" },
                { text: "We go hiking every autumn.", answer: "autumn" },
                { text: "The days get shorter in autumn.", answer: "autumn" },
                { text: "Apples are ready to pick in autumn.", answer: "autumn" },
                { text: "It is often windy in autumn.", answer: "autumn" },
                { text: "Mid-Autumn Festival is very popular.", answer: "Autumn" },
                { text: "The park is beautiful in autumn.", answer: "autumn" },
                { text: "The trees lose their leaves in autumn.", answer: "autumn" }
            ]
        },
        {
            en: "away",
            ch: "離開 (adv.)",
            sents: [
                { text: "Go away! I am busy.", answer: "away" },
                { text: "The bird flew away.", answer: "away" },
                { text: "Put your toys away.", answer: "away" },
                { text: "The station is five miles away.", answer: "away" },
                { text: "She is away on holiday.", answer: "away" },
                { text: "Don't run away from your problems.", answer: "away" },
                { text: "He turned away and left.", answer: "away" },
                { text: "Throw the trash away.", answer: "away" },
                { text: "Stay away from the fire.", answer: "away" },
                { text: "The cat ran away when it saw the dog.", answer: "away" }
            ]
        },
        {
            en: "baby",
            ch: "嬰兒 (n.)",
            sents: [
                { text: "The baby is sleeping peacefully.", answer: "baby" },
                { text: "She has a new baby brother.", answer: "baby" },
                { text: "The baby started to cry.", answer: "baby" },
                { text: "The baby is learning to walk.", answer: "baby" },
                { text: "She looks just like a baby.", answer: "baby" },
                { text: "We bought a gift for the baby.", answer: "baby" },
                { text: "The baby smiled at me.", answer: "baby" },
                { text: "Be quiet, the baby is asleep.", answer: "baby" },
                { text: "She is carrying the baby.", answer: "baby" },
                { text: "The baby has blue eyes.", answer: "baby" }
            ]
        },
        {
            en: "back",
            ch: "背部/後面 (n.)",
            sents: [
                { text: "My back hurts after sitting all day.", answer: "back" },
                { text: "Please sign your name on the back of the card.", answer: "back" },
                { text: "He carried the backpack on his back.", answer: "backpack" },
                { text: "She turned her back to the door.", answer: "back" },
                { text: "Go to the back of the line.", answer: "back" },
                { text: "I'll be back in ten minutes.", answer: "back" },
                { text: "The cat has a black spot on its back.", answer: "back" },
                { text: "He sat in the back of the classroom.", answer: "back" },
                { text: "Can you scratch my back?", answer: "back" },
                { text: "The house has a small garden at the back.", answer: "back" }
            ]
        },
        {
            en: "bad",
            ch: "壞的 (adj.)",
            sents: [
                { text: "Eating too much candy is bad for your teeth.", answer: "bad" },
                { text: "I have some bad news for you.", answer: "bad" },
                { text: "The weather is really bad today.", answer: "bad" },
                { text: "Smoking is a bad habit.", answer: "bad" },
                { text: "He is in a bad mood this morning.", answer: "bad" },
                { text: "I feel bad about breaking your vase.", answer: "bad" },
                { text: "This milk smells bad.", answer: "bad" },
                { text: "The movie got very bad reviews.", answer: "bad" },
                { text: "It's not a bad idea to save money.", answer: "bad" },
                { text: "Don't say bad words.", answer: "bad" }
            ]
        },
        {
            en: "bag",
            ch: "袋 (n.)",
            sents: [
                { text: "Put the groceries in the bag.", answer: "bag" },
                { text: "She is carrying a heavy school bag.", answer: "bag" },
                { text: "I lost my bag at the airport.", answer: "bag" },
                { text: "Can you help me with these shopping bags?", answer: "bags" },
                { text: "He took a notebook out of his bag.", answer: "bag" },
                { text: "This leather bag is very expensive.", answer: "bag" },
                { text: "Is this your bag?", answer: "bag" },
                { text: "The plastic bag is under the table.", answer: "bag" },
                { text: "She packed her bag for the trip.", answer: "bag" },
                { text: "I need a bigger bag for my books.", answer: "bag" }
            ]
        },
        {
            en: "ball",
            ch: "球 (n.)",
            sents: [
                { text: "He kicked the ball across the field.", answer: "ball" },
                { text: "Throw the ball to me!", answer: "ball" },
                { text: "The children are playing with a ball.", answer: "ball" },
                { text: "The tennis ball is yellow.", answer: "ball" },
                { text: "Catch the ball if you can.", answer: "ball" },
                { text: "The ball rolled under the car.", answer: "ball" },
                { text: "We need a new ball for the game.", answer: "ball" },
                { text: "He hit the ball very hard.", answer: "ball" },
                { text: "She is bouncing the ball on the floor.", answer: "ball" },
                { text: "The cat is chasing a small ball.", answer: "ball" }
            ]
        },
        {
            en: "banana",
            ch: "香蕉 (n.)",
            sents: [
                { text: "I like to eat a banana for energy.", answer: "banana" },
                { text: "The banana is ripe and sweet.", answer: "banana" },
                { text: "She is peeling a banana for the baby.", answer: "banana" },
                { text: "Monkey loves eating bananas.", answer: "bananas" },
                { text: "We bought a bunch of bananas.", answer: "bananas" },
                { text: "I put some banana slices in my cereal.", answer: "banana" },
                { text: "The banana skin is yellow.", answer: "banana" },
                { text: "Banana bread is my favorite dessert.", answer: "Banana" },
                { text: "Don't slip on the banana peel!", answer: "banana" },
                { text: "Are there any bananas in the kitchen?", answer: "bananas" }
            ]
        },
        {
            en: "band",
            ch: "樂隊 (n.)",
            sents: [
                { text: "My brother plays in a rock band.", answer: "band" },
                { text: "The band is playing my favorite song.", answer: "band" },
                { text: "I want to start a band with my friends.", answer: "band" },
                { text: "Which band do you like the most?", answer: "band" },
                { text: "The school band practices every Friday.", answer: "band" },
                { text: "They are a very famous pop band.", answer: "band" },
                { text: "The band performed live in the park.", answer: "band" },
                { text: "He wears a rubber band on his wrist.", answer: "band" },
                { text: "The wedding band was very good.", answer: "band" },
                { text: "I saw the band at a concert last year.", answer: "band" }
            ]
        },
        {
            en: "bath",
            ch: "洗澡 (n.)",
            sents: [
                { text: "I like to take a warm bath before bed.", answer: "bath" },
                { text: "The baby is having a bath in the tub.", answer: "bath" },
                { text: "I need to give the dog a bath.", answer: "bath" },
                { text: "The bathwater is too hot.", answer: "bathwater" },
                { text: "After hiking, she took a long bath.", answer: "bath" },
                { text: "There is no bath in this apartment, only a shower.", answer: "bath" },
                { text: "He is relaxing in the bath.", answer: "bath" },
                { text: "It's time for your bath, Johnny!", answer: "bath" },
                { text: "She added some bubbles to her bath.", answer: "bath" },
                { text: "The bath is ready for you.", answer: "bath" }
            ]
        },
        {
            en: "bathroom",
            ch: "浴室 (n.)",
            sents: [
                { text: "May I use your bathroom?", answer: "bathroom" },
                { text: "The bathroom is at the end of the hall.", answer: "bathroom" },
                { text: "I need to clean the bathroom today.", answer: "bathroom" },
                { text: "The bathroom floor is wet.", answer: "bathroom" },
                { text: "She is brushing her teeth in the bathroom.", answer: "bathroom" },
                { text: "Our house has two bathrooms.", answer: "bathrooms" },
                { text: "Is there any soap in the bathroom?", answer: "bathroom" },
                { text: "The bathroom mirror is dirty.", answer: "bathroom" },
                { text: "Wait a minute, he's in the bathroom.", answer: "bathroom" },
                { text: "I left my towel in the bathroom.", answer: "bathroom" }
            ]
        },
        {
            en: "be",
            ch: "是 (v.)",
            sents: [
                { text: "I want to be a teacher.", answer: "be" },
                { text: "Please be quiet in the library.", answer: "be" },
                { text: "He wants to be famous one day.", answer: "be" },
                { text: "To be or not to be, that is the question.", answer: "be" },
                { text: "She is happy to be here.", answer: "be" },
                { text: "It will be sunny tomorrow.", answer: "be" },
                { text: "Don't be afraid of mistakes.", answer: "be" },
                { text: "Be careful when you cross the road.", answer: "Be" },
                { text: "I'll be there at seven.", answer: "be" },
                { text: "What do you want to be when you grow up?", answer: "be" }
            ]
        },
        {
            en: "beach",
            ch: "沙灘 (n.)",
            sents: [
                { text: "Let's go to the beach this weekend.", answer: "beach" },
                { text: "I like walking on the beach at sunset.", answer: "beach" },
                { text: "The children are building a sandcastle on the beach.", answer: "beach" },
                { text: "The beach was very crowded today.", answer: "beach" },
                { text: "We found some beautiful shells on the beach.", answer: "beach" },
                { text: "Is the beach far from here?", answer: "beach" },
                { text: "I fell asleep on the beach.", answer: "beach" },
                { text: "The water at this beach is very clean.", answer: "beach" },
                { text: "We played volleyball on the beach.", answer: "beach" },
                { text: "I love the sound of the waves at the beach.", answer: "beach" }
            ]
        },
        {
            en: "beautiful",
            ch: "美麗的 (adj.)",
            sents: [
                { text: "She is wearing a beautiful dress.", answer: "beautiful" },
                { text: "The flowers in the garden are beautiful.", answer: "beautiful" },
                { text: "What a beautiful sunset!", answer: "beautiful" },
                { text: "This is a beautiful place for a picnic.", answer: "beautiful" },
                { text: "You have a beautiful voice.", answer: "beautiful" },
                { text: "The movie has a beautiful ending.", answer: "beautiful" },
                { text: "She has beautiful long hair.", answer: "beautiful" },
                { text: "It's a beautiful morning, isn't it?", answer: "beautiful" },
                { text: "This painting is absolutely beautiful.", answer: "beautiful" },
                { text: "The view from the top is beautiful.", answer: "beautiful" }
            ]
        },
        {
            en: "because",
            ch: "因為 (conj.)",
            sents: [
                { text: "I am happy because it's my birthday.", answer: "because" },
                { text: "She stayed home because she was sick.", answer: "because" },
                { text: "We were late because of the traffic.", answer: "because" },
                { text: "He is angry because I broke his toy.", answer: "because" },
                { text: "I like him because he is very kind.", answer: "because" },
                { text: "I'm studying hard because I want to pass.", answer: "because" },
                { text: "The game was cancelled because it rained.", answer: "because" },
                { text: "I asked because I was curious.", answer: "because" },
                { text: "He smiled because he was proud of you.", answer: "because" },
                { text: "She is tired because she worked all night.", answer: "because" }
            ]
        },
        {
            en: "become",
            ch: "成為 (v.)",
            sents: [
                { text: "He wants to become a pilot.", answer: "become" },
                { text: "It's starting to become cold.", answer: "become" },
                { text: "She became a doctor after years of study.", answer: "became" },
                { text: "The weather became very windy.", answer: "became" },
                { text: "They became best friends in high school.", answer: "became" },
                { text: "He became famous after the movie.", answer: "became" },
                { text: "My dream is to become a successful artist.", answer: "become" },
                { text: "The situation became very difficult.", answer: "became" },
                { text: "The caterpillar becomes a butterfly.", answer: "becomes" },
                { text: "She became interested in art recently.", answer: "became" }
            ]
        },
        {
            en: "bed",
            ch: "床 (n.)",
            sents: [
                { text: "It's time to go to bed.", answer: "bed" },
                { text: "I like to read in bed.", answer: "bed" },
                { text: "The bed is very soft and comfortable.", answer: "bed" },
                { text: "He is still in bed at ten o'clock.", answer: "bed" },
                { text: "Please make your bed every morning.", answer: "bed" },
                { text: "The cat is sleeping on my bed.", answer: "bed" },
                { text: "I jumped into bed and fell asleep.", answer: "bed" },
                { text: "We bought a new king-size bed.", answer: "bed" },
                { text: "I need to change the bed sheets.", answer: "bed" },
                { text: "She sat on the edge of the bed.", answer: "bed" }
            ]
        },
        {
            en: "bedroom",
            ch: "睡房 (n.)",
            sents: [
                { text: "My bedroom is on the second floor.", answer: "bedroom" },
                { text: "I share a bedroom with my sister.", answer: "bedroom" },
                { text: "She is cleaning her bedroom now.", answer: "bedroom" },
                { text: "The bedroom has a large window.", answer: "bedroom" },
                { text: "I have a desk in my bedroom.", answer: "bedroom" },
                { text: "Please stay in your bedroom.", answer: "bedroom" },
                { text: "Her bedroom walls are painted blue.", answer: "bedroom" },
                { text: "The master bedroom is very spacious.", answer: "bedroom" },
                { text: "I left my phone in the bedroom.", answer: "bedroom" },
                { text: "His bedroom is always very tidy.", answer: "bedroom" }
            ]
        },
        {
            en: "beer",
            ch: "啤酒 (n.)",
            sents: [
                { text: "He likes to drink a cold beer after work.", answer: "beer" },
                { text: "Would you like another beer?", answer: "beer" },
                { text: "This beer is from Germany.", answer: "beer" },
                { text: "He ordered a glass of beer.", answer: "beer" },
                { text: "Drinking too much beer is not healthy.", answer: "beer" },
                { text: "The beer is very bitter.", answer: "beer" },
                { text: "They had some beer at the party.", answer: "beer" },
                { text: "Is there any beer in the fridge?", answer: "beer" },
                { text: "He doesn't like the taste of beer.", answer: "beer" },
                { text: "Can I have a non-alcoholic beer?", answer: "beer" }
            ]
        },
        {
            en: "before",
            ch: "在...之前 (prep.)",
            sents: [
                { text: "Wash your hands before dinner.", answer: "before" },
                { text: "I need to finish this before 5 PM.", answer: "before" },
                { text: "Think before you speak.", answer: "before" },
                { text: "I have seen this movie before.", answer: "before" },
                { text: "We arrived before the store opened.", answer: "before" },
                { text: "He was nervous before the interview.", answer: "before" },
                { text: "Please call me before you leave.", answer: "before" },
                { text: "The day before yesterday was Sunday.", answer: "before" },
                { text: "She always exercises before work.", answer: "before" },
                { text: "Brush your teeth before you go to sleep.", answer: "before" }
            ]
        },
        {
            en: "begin",
            ch: "開始 (v.)",
            sents: [
                { text: "The movie will begin in five minutes.", answer: "begin" },
                { text: "Let's begin the meeting now.", answer: "begin" },
                { text: "When does the concert begin?", answer: "begin" },
                { text: "It began to rain suddenly.", answer: "began" },
                { text: "I will begin my diet tomorrow.", answer: "begin" },
                { text: "She began to cry when she heard the news.", answer: "began" },
                { text: "He began his career as a teacher.", answer: "began" },
                { text: "Where does the story begin?", answer: "begin" },
                { text: "The classes begin in September.", answer: "begin" },
                { text: "I don't know where to begin.", answer: "begin" }
            ]
        },
        {
            en: "beginning",
            ch: "開端 (n.)",
            sents: [
                { text: "This is only the beginning of the story.", answer: "beginning" },
                { text: "I missed the beginning of the movie.", answer: "beginning" },
                { text: "January is the beginning of the year.", answer: "beginning" },
                { text: "At the beginning, I was very nervous.", answer: "beginning" },
                { text: "The beginning of the book is very slow.", answer: "beginning" },
                { text: "Every ending is a new beginning.", answer: "beginning" },
                { text: "She stood at the beginning of the path.", answer: "beginning" },
                { text: "Let's start again from the beginning.", answer: "beginning" },
                { text: "I didn't like the beginning of the play.", answer: "beginning" },
                { text: "He was there from the beginning to the end.", answer: "beginning" }
            ]
        },
        {
            en: "behind",
            ch: "在...後面 (prep.)",
            sents: [
                { text: "The cat is hiding behind the sofa.", answer: "behind" },
                { text: "The sun went behind a cloud.", answer: "behind" },
                { text: "Who is that standing behind you?", answer: "behind" },
                { text: "The garden is behind the house.", answer: "behind" },
                { text: "Don't look behind you.", answer: "behind" },
                { text: "He sat behind me in the cinema.", answer: "behind" },
                { text: "I left my umbrella behind.", answer: "behind" },
                { text: "She is running behind schedule.", answer: "behind" },
                { text: "There is a small park behind our school.", answer: "behind" },
                { text: "He hid the gift behind his back.", answer: "behind" }
            ]
        },
        {
            en: "believe",
            ch: "相信 (v.)",
            sents: [
                { text: "I believe you can do it!", answer: "believe" },
                { text: "Do you believe in ghosts?", answer: "believe" },
                { text: "I can't believe it's already June.", answer: "believe" },
                { text: "She believes everything she reads.", answer: "believes" },
                { text: "I believe that honesty is important.", answer: "believe" },
                { text: "He doesn't believe my story.", answer: "believe" },
                { text: "Believe in yourself.", answer: "Believe" },
                { text: "I believe we have met before.", answer: "believe" },
                { text: "Do you believe what he said?", answer: "believe" },
                { text: "I find it hard to believe.", answer: "believe" }
            ]
        },
        {
            en: "below",
            ch: "在...下面 (adv.)",
            sents: [
                { text: "The temperature is below zero today.", answer: "below" },
                { text: "Please read the information below.", answer: "below" },
                { text: "The valley is far below us.", answer: "below" },
                { text: "He has an apartment below mine.", answer: "below" },
                { text: "Write your name in the space below.", answer: "below" },
                { text: "The water level is below normal.", answer: "below" },
                { text: "She looked down at the city below.", answer: "below" },
                { text: "The sun disappeared below the horizon.", answer: "below" },
                { text: "His score was below average.", answer: "below" },
                { text: "The fish were swimming below the boat.", answer: "below" }
            ]
        },
        {
            en: "between",
            ch: "在...之間 (prep.)",
            sents: [
                { text: "The shop is between the bank and the pharmacy.", answer: "between" },
                { text: "I am sitting between Tom and Mary.", answer: "between" },
                { text: "What happened between them?", answer: "between" },
                { text: "The meeting is between 2 and 3 PM.", answer: "between" },
                { text: "There is a fence between the two houses.", answer: "between" },
                { text: "Choose between the red one and the blue one.", answer: "between" },
                { text: "The ball fell between the cushions.", answer: "between" },
                { text: "Keep this secret between you and me.", answer: "between" },
                { text: "The differences between the two are small.", answer: "between" },
                { text: "Switzerland lies between France and Italy.", answer: "between" }
            ]
        },
        {
            en: "bicycle",
            ch: "單車 (n.)",
            sents: [
                { text: "I go to school by bicycle every day.", answer: "bicycle" },
                { text: "He is learning how to ride a bicycle.", answer: "bicycle" },
                { text: "My bicycle has a small bell.", answer: "bicycle" },
                { text: "She bought a new mountain bicycle.", answer: "bicycle" },
                { text: "Please lock your bicycle outside.", answer: "bicycle" },
                { text: "The blue bicycle belongs to my brother.", answer: "bicycle" },
                { text: "I need to pump up the tires of my bicycle.", answer: "bicycle" },
                { text: "He fell off his bicycle but he's okay.", answer: "bicycle" },
                { text: "Riding a bicycle is good exercise.", answer: "bicycle" },
                { text: "There are many bicycles parked near the station.", answer: "bicycles" }
            ]
        },
        {
            en: "big",
            ch: "大的 (adj.)",
            sents: [
                { text: "He lives in a big house with a garden.", answer: "big" },
                { text: "That is a very big dog!", answer: "big" },
                { text: "I have a big family.", answer: "big" },
                { text: "The elephant is a big animal.", answer: "big" },
                { text: "We need a big box for these toys.", answer: "big" },
                { text: "She made a big mistake in the test.", answer: "big" },
                { text: "New York is a big city.", answer: "big" },
                { text: "He gave me a big smile.", answer: "big" },
                { text: "The shoes are too big for me.", answer: "big" },
                { text: "There is a big tree in front of the school.", answer: "big" }
            ]
        },
        {
            en: "bike",
            ch: "單車 (n.)",
            sents: [
                { text: "Can I ride your bike?", answer: "bike" },
                { text: "He is fixing his bike in the garage.", answer: "bike" },
                { text: "I like to go for a bike ride on Sundays.", answer: "bike" },
                { text: "She wears a helmet when she rides her bike.", answer: "bike" },
                { text: "My bike is faster than yours.", answer: "bike" },
                { text: "He left his bike at the park.", answer: "bike" },
                { text: "I want a new bike for my birthday.", answer: "bike" },
                { text: "Wait for me, my bike is slow!", answer: "bike" },
                { text: "There is a basket on the front of her bike.", answer: "bike" },
                { text: "Let's go to the beach by bike.", answer: "bike" }
            ]
        },
        {
            en: "bill",
            ch: "帳單 (n.)",
            sents: [
                { text: "Can I have the bill, please?", answer: "bill" },
                { text: "The electricity bill is very high this month.", answer: "bill" },
                { text: "He forgot to pay the phone bill.", answer: "bill" },
                { text: "We split the dinner bill equally.", answer: "bill" },
                { text: "Please check the bill for any mistakes.", answer: "bill" },
                { text: "I paid the bill with my credit card.", answer: "bill" },
                { text: "The waiter brought the bill to our table.", answer: "bill" },
                { text: "He put the bill in his pocket.", answer: "bill" },
                { text: "Is service included in the bill?", answer: "bill" },
                { text: "She was surprised by the medical bill.", answer: "bill" }
            ]
        },
        {
            en: "bird",
            ch: "鳥 (n.)",
            sents: [
                { text: "A small bird is singing in the tree.", answer: "bird" },
                { text: "Look at that beautiful blue bird!", answer: "bird" },
                { text: "Birds can fly high in the sky.", answer: "Birds" },
                { text: "He likes to watch birds in the forest.", answer: "birds" },
                { text: "The bird built a nest under the roof.", answer: "bird" },
                { text: "I feed the birds in the park every morning.", answer: "birds" },
                { text: "Some birds fly south for the winter.", answer: "birds" },
                { text: "The cat is trying to catch a bird.", answer: "bird" },
                { text: "An eagle is a very large bird.", answer: "bird" },
                { text: "We heard the birds chirping at dawn.", answer: "birds" }
            ]
        },
        {
            en: "birthday",
            ch: "生日 (n.)",
            sents: [
                { text: "When is your birthday?", answer: "birthday" },
                { text: "Happy birthday to you!", answer: "birthday" },
                { text: "I am having a party for my birthday.", answer: "birthday" },
                { text: "She got many gifts on her birthday.", answer: "birthday" },
                { text: "My birthday is on the tenth of May.", answer: "birthday" },
                { text: "We ate a big chocolate cake for his birthday.", answer: "birthday" },
                { text: "What do you want for your birthday?", answer: "birthday" },
                { text: "I forgot my brother's birthday.", answer: "birthday" },
                { text: "She invited all her friends to her birthday.", answer: "birthday" },
                { text: "He celebrated his 18th birthday last week.", answer: "birthday" }
            ]
        },
        {
            en: "black",
            ch: "黑色 (adj.)",
            sents: [
                { text: "She is wearing a black dress.", answer: "black" },
                { text: "My car is black.", answer: "black" },
                { text: "He has short black hair.", answer: "black" },
                { text: "The night sky was completely black.", answer: "black" },
                { text: "I like my coffee black without sugar.", answer: "black" },
                { text: "He used a black pen to sign the form.", answer: "black" },
                { text: "The cat is pure black.", answer: "black" },
                { text: "Black shoes go with everything.", answer: "Black" },
                { text: "The chalkboard is black.", answer: "black" },
                { text: "She carries a black leather bag.", answer: "black" }
            ]
        },
        {
            en: "blog",
            ch: "博客 (n.)",
            sents: [
                { text: "She writes a travel blog.", answer: "blog" },
                { text: "I read your latest blog post today.", answer: "blog" },
                { text: "He started a blog about cooking.", answer: "blog" },
                { text: "Do you follow any fashion blogs?", answer: "blogs" },
                { text: "I need to update my blog this evening.", answer: "blog" },
                { text: "She shares her photos on her blog.", answer: "blog" },
                { text: "The blog has many interesting comments.", answer: "blog" },
                { text: "He explained the game on his blog.", answer: "blog" },
                { text: "My favorite blog is about technology.", answer: "blog" },
                { text: "She earned money through her blog.", answer: "blog" }
            ]
        },
        {
            en: "blonde",
            ch: "金髮的 (adj.)",
            sents: [
                { text: "She has long blonde hair.", answer: "blonde" },
                { text: "He is the boy with the blonde hair.", answer: "blonde" },
                { text: "The actress dyed her hair blonde.", answer: "blonde" },
                { text: "Her baby has curly blonde hair.", answer: "blonde" },
                { text: "Is your natural hair color blonde?", answer: "blonde" },
                { text: "She looks good with blonde hair.", answer: "blonde" },
                { text: "The blonde girl is my cousin.", answer: "blonde" },
                { text: "He was born with blonde hair.", answer: "blonde" },
                { text: "Many people in Sweden are blonde.", answer: "blonde" },
                { text: "She prefers being blonde.", answer: "blonde" }
            ]
        },
        {
            en: "blue",
            ch: "藍色 (adj.)",
            sents: [
                { text: "The sky is clear and blue today.", answer: "blue" },
                { text: "She has beautiful blue eyes.", answer: "blue" },
                { text: "He is wearing a blue shirt.", answer: "blue" },
                { text: "The ocean looks very blue from here.", answer: "blue" },
                { text: "My favorite color is blue.", answer: "blue" },
                { text: "He bought a dark blue car.", answer: "blue" },
                { text: "The pen writes in blue ink.", answer: "blue" },
                { text: "She painted the bedroom walls blue.", answer: "blue" },
                { text: "The flowers are a bright blue color.", answer: "blue" },
                { text: "I have a blue umbrella.", answer: "blue" }
            ]
        },
        {
            en: "boat",
            ch: "船 (n.)",
            sents: [
                { text: "We took a boat across the lake.", answer: "boat" },
                { text: "The boat is sailing on the river.", answer: "boat" },
                { text: "He owns a small fishing boat.", answer: "boat" },
                { text: "The boat was rocking in the waves.", answer: "boat" },
                { text: "They went for a boat ride at sunset.", answer: "boat" },
                { text: "The boat reached the shore at noon.", answer: "boat" },
                { text: "I feel sick on a boat.", answer: "boat" },
                { text: "The wooden boat is very old.", answer: "boat" },
                { text: "We spent the day on the boat.", answer: "boat" },
                { text: "The rescue boat arrived quickly.", answer: "boat" }
            ]
        },
        {
            en: "body",
            ch: "身體 (n.)",
            sents: [
                { text: "Exercise is good for your body.", answer: "body" },
                { text: "The human body is amazing.", answer: "body" },
                { text: "He has a very strong body.", answer: "body" },
                { text: "She felt a pain in her whole body.", answer: "body" },
                { text: "Fruits provide vitamins for our body.", answer: "body" },
                { text: "Keep your body warm in winter.", answer: "body" },
                { text: "He has tattoos all over his body.", answer: "body" },
                { text: "Your body needs enough sleep.", answer: "body" },
                { text: "Water makes up most of the human body.", answer: "body" },
                { text: "She is proud of her healthy body.", answer: "body" }
            ]
        },
        {
            en: "book",
            ch: "書 (n.)",
            sents: [
                { text: "I am reading an interesting book.", answer: "book" },
                { text: "Please open your book to page ten.", answer: "book" },
                { text: "The book is on the table.", answer: "book" },
                { text: "She borrowed a book from the library.", answer: "book" },
                { text: "He wrote a book about his life.", answer: "book" },
                { text: "This book has a lot of pictures.", answer: "book" },
                { text: "I need to buy a new English book.", answer: "book" },
                { text: "Can you recommend a good book?", answer: "book" },
                { text: "The book was very long but exciting.", answer: "book" },
                { text: "She loves collecting old books.", answer: "books" }
            ]
        },
        {
            en: "boot",
            ch: "靴子 (n.)",
            sents: [
                { text: "She is wearing brown leather boots.", answer: "boots" },
                { text: "I need new boots for the winter.", answer: "boots" },
                { text: "He put his boots near the door.", answer: "boots" },
                { text: "The hiking boots are very heavy.", answer: "boots" },
                { text: "These boots are waterproof.", answer: "boots" },
                { text: "She polished her black boots.", answer: "boots" },
                { text: "The mud got all over my boots.", answer: "boots" },
                { text: "I wear rain boots when it's wet.", answer: "boots" },
                { text: "He is wearing cowboy boots.", answer: "boots" },
                { text: "The baby has tiny red boots.", answer: "boots" }
            ]
        },
        {
            en: "bored",
            ch: "感到厭倦 (adj.)",
            sents: [
                { text: "I am bored, let's play a game.", answer: "bored" },
                { text: "The students looked bored during the long speech.", answer: "bored" },
                { text: "She gets bored easily.", answer: "bored" },
                { text: "He was bored with his old toys.", answer: "bored" },
                { text: "Are you bored of staying at home?", answer: "bored" },
                { text: "I felt bored during the meeting.", answer: "bored" },
                { text: "The cat looks bored.", answer: "bored" },
                { text: "She was bored to tears by the movie.", answer: "bored" },
                { text: "He reads books when he is bored.", answer: "bored" },
                { text: "Don't let the children get bored.", answer: "bored" }
            ]
        },
        {
            en: "boring",
            ch: "沉悶的 (adj.)",
            sents: [
                { text: "The movie was very boring.", answer: "boring" },
                { text: "I think history is boring.", answer: "boring" },
                { text: "He told a boring story.", answer: "boring" },
                { text: "This is a boring job.", answer: "boring" },
                { text: "She finds golf boring to watch.", answer: "boring" },
                { text: "Waiting for the bus is boring.", answer: "boring" },
                { text: "The party was a bit boring.", answer: "boring" },
                { text: "He lives a boring life.", answer: "boring" },
                { text: "I don't like boring people.", answer: "boring" },
                { text: "The lecture was long and boring.", answer: "boring" }
            ]
        },
        {
            en: "born",
            ch: "出生 (v.)",
            sents: [
                { text: "I was born in Hong Kong.", answer: "born" },
                { text: "Where were you born?", answer: "born" },
                { text: "He was born on a rainy day.", answer: "born" },
                { text: "She was born in 1995.", answer: "born" },
                { text: "The baby was born this morning.", answer: "born" },
                { text: "My sister was born three years after me.", answer: "born" },
                { text: "He was born to be a musician.", answer: "born" },
                { text: "She was born into a wealthy family.", answer: "born" },
                { text: "I was born in the month of April.", answer: "born" },
                { text: "Were you born in a hospital?", answer: "born" }
            ]
        },
        {
            en: "both",
            ch: "兩者 (det.)",
            sents: [
                { text: "Both of my parents are teachers.", answer: "Both" },
                { text: "I like both of these shirts.", answer: "both" },
                { text: "They are both very kind.", answer: "both" },
                { text: "Both Tom and Mary are coming.", answer: "Both" },
                { text: "She can speak both English and Chinese.", answer: "both" },
                { text: "He used both hands to carry the box.", answer: "both" },
                { text: "I want both of them.", answer: "both" },
                { text: "Both brothers are good at sports.", answer: "Both" },
                { text: "The movie was both funny and sad.", answer: "both" },
                { text: "Both sides of the paper are white.", answer: "Both" }
            ]
        },
        {
            en: "bottle",
            ch: "樽 (n.)",
            sents: [
                { text: "Can I have a bottle of water?", answer: "bottle" },
                { text: "The baby is drinking from a bottle.", answer: "bottle" },
                { text: "She broke a glass bottle.", answer: "bottle" },
                { text: "There is a message in the bottle.", answer: "bottle" },
                { text: "He opened a bottle of wine.", answer: "bottle" },
                { text: "Please put the empty bottles in the bin.", answer: "bottles" },
                { text: "I bought a large bottle of juice.", answer: "bottle" },
                { text: "The bottle is made of plastic.", answer: "bottle" },
                { text: "She filled the bottle with milk.", answer: "bottle" },
                { text: "He shook the bottle before opening it.", answer: "bottle" }
            ]
        },
        {
            en: "box",
            ch: "盒 (n.)",
            sents: [
                { text: "The toys are in the big box.", answer: "box" },
                { text: "He opened the gift box.", answer: "box" },
                { text: "I need a cardboard box for moving.", answer: "box" },
                { text: "She put the old photos in a box.", answer: "box" },
                { text: "There is a small box on my desk.", answer: "box" },
                { text: "Can you help me carry this box?", answer: "box" },
                { text: "The box is very heavy.", answer: "box" },
                { text: "He hid the ring in a tiny box.", answer: "box" },
                { text: "She ate a whole box of chocolates.", answer: "box" },
                { text: "The shoe box is empty.", answer: "box" }
            ]
        },
        {
            en: "boy",
            ch: "男孩 (n.)",
            sents: [
                { text: "The little boy is playing with his toy cars.", answer: "boy" },
                { text: "He is a very smart boy.", answer: "boy" },
                { text: "There are ten boys in my class.", answer: "boys" },
                { text: "The boy wearing a blue cap is my brother.", answer: "boy" },
                { text: "That boy is good at playing basketball.", answer: "boy" },
                { text: "Who is that boy standing by the gate?", answer: "boy" },
                { text: "The boys ran out to the playground.", answer: "boys" },
                { text: "He has been a hardworking boy since young.", answer: "boy" },
                { text: "The boy cried because he lost his balloon.", answer: "boy" },
                { text: "A group of boys are riding their bikes.", answer: "boys" }
            ]
        },
        {
            en: "boyfriend",
            ch: "男朋友 (n.)",
            sents: [
                { text: "She went to the cinema with her boyfriend.", answer: "boyfriend" },
                { text: "Is he your boyfriend?", answer: "boyfriend" },
                { text: "Her boyfriend works as a computer programmer.", answer: "boyfriend" },
                { text: "She bought a birthday gift for her boyfriend.", answer: "boyfriend" },
                { text: "My boyfriend is very kind and funny.", answer: "boyfriend" },
                { text: "They have been boyfriend and girlfriend for two years.", answer: "boyfriend" },
                { text: "Her boyfriend gave her a beautiful ring.", answer: "boyfriend" },
                { text: "Does your boyfriend like spicy food?", answer: "boyfriend" },
                { text: "I met her boyfriend for the first time yesterday.", answer: "boyfriend" },
                { text: "She is waiting for her boyfriend at the station.", answer: "boyfriend" }
            ]
        },
        {
            en: "bread",
            ch: "麵包 (n.)",
            sents: [
                { text: "I usually have bread and eggs for breakfast.", answer: "bread" },
                { text: "This bread is fresh and warm.", answer: "bread" },
                { text: "Would you like a slice of bread?", answer: "bread" },
                { text: "She is buying some bread at the bakery.", answer: "bread" },
                { text: "He put some butter on his bread.", answer: "bread" },
                { text: "I like the smell of baking bread.", answer: "bread" },
                { text: "Can you cut the bread into small pieces?", answer: "bread" },
                { text: "We need to buy more bread for sandwiches.", answer: "bread" },
                { text: "The bread has gone hard, don't eat it.", answer: "bread" },
                { text: "White bread is softer than wholemeal bread.", answer: "bread" }
            ]
        },
        {
            en: "break",
            ch: "休息/打破 (v./n.)",
            sents: [
                { text: "Be careful not to break the glass.", answer: "break" },
                { text: "Let's take a ten-minute break.", answer: "break" },
                { text: "Did you break your phone screen?", answer: "break" },
                { text: "I need a break from studying.", answer: "break" },
                { text: "He broke his leg while skiing.", answer: "broke" },
                { text: "Don't break the rules of the game.", answer: "break" },
                { text: "The waves break against the rocks.", answer: "break" },
                { text: "She took a short break to drink some water.", answer: "break" },
                { text: "Who broke the window?", answer: "broke" },
                { text: "We usually have a lunch break at 1 PM.", answer: "break" }
            ]
        },
        {
            en: "breakfast",
            ch: "早餐 (n.)",
            sents: [
                { text: "What did you have for breakfast?", answer: "breakfast" },
                { text: "I never skip breakfast.", answer: "breakfast" },
                { text: "Breakfast is the most important meal of the day.", answer: "Breakfast" },
                { text: "She made a delicious breakfast for us.", answer: "breakfast" },
                { text: "I usually eat breakfast at 7:30 AM.", answer: "breakfast" },
                { text: "We had a big breakfast at the hotel.", answer: "breakfast" },
                { text: "Would you like some cereal for breakfast?", answer: "breakfast" },
                { text: "He is reading the news while having breakfast.", answer: "breakfast" },
                { text: "I only had a cup of coffee for breakfast.", answer: "breakfast" },
                { text: "They serve breakfast until 10 o'clock.", answer: "breakfast" }
            ]
        },
        {
            en: "bring",
            ch: "帶來 (v.)",
            sents: [
                { text: "Don't forget to bring your umbrella.", answer: "bring" },
                { text: "Can you bring me a glass of water?", answer: "bring" },
                { text: "Please bring your homework to class tomorrow.", answer: "bring" },
                { text: "He brought some flowers for his mother.", answer: "brought" },
                { text: "The party will bring everyone together.", answer: "bring" },
                { text: "I'll bring the dessert for the dinner.", answer: "bring" },
                { text: "Did you bring your camera with you?", answer: "bring" },
                { text: "She brought her new friend to the party.", answer: "brought" },
                { text: "This music brings back many memories.", answer: "brings" },
                { text: "Wait here, I'll bring it to you.", answer: "bring" }
            ]
        },
        {
            en: "brother",
            ch: "兄弟 (n.)",
            sents: [
                { text: "I have an older brother and a younger sister.", answer: "brother" },
                { text: "My brother is a university student.", answer: "brother" },
                { text: "Do you have any brothers?", answer: "brothers" },
                { text: "He looks very much like his brother.", answer: "brother" },
                { text: "My brother helped me fix my computer.", answer: "brother" },
                { text: "She has two brothers who are twins.", answer: "brothers" },
                { text: "My brother lives in another city.", answer: "brother" },
                { text: "I am taller than my brother.", answer: "brother" },
                { text: "His brother is good at drawing.", answer: "brother" },
                { text: "We are brothers, we should help each other.", answer: "brothers" }
            ]
        },
        {
            en: "brown",
            ch: "啡色 (adj.)",
            sents: [
                { text: "The dog has brown fur.", answer: "brown" },
                { text: "She is wearing a brown jacket.", answer: "brown" },
                { text: "He has dark brown eyes.", answer: "brown" },
                { text: "The dead leaves on the ground are brown.", answer: "brown" },
                { text: "I prefer the brown shoes over the black ones.", answer: "brown" },
                { text: "The table is made of brown wood.", answer: "brown" },
                { text: "She painted the fence brown.", answer: "brown" },
                { text: "He has a brown leather wallet.", answer: "brown" },
                { text: "The sugar we use is light brown.", answer: "brown" },
                { text: "The bear in the forest was big and brown.", answer: "brown" }
            ]
        },
        {
            en: "build",
            ch: "建造 (v.)",
            sents: [
                { text: "They are going to build a new bridge here.", answer: "build" },
                { text: "He built a birdhouse with his father.", answer: "built" },
                { text: "It takes time to build a strong house.", answer: "build" },
                { text: "She likes to build things with LEGO bricks.", answer: "build" },
                { text: "The company plans to build more apartments.", answer: "build" },
                { text: "We built a sandcastle on the beach.", answer: "built" },
                { text: "He wants to build his own business.", answer: "build" },
                { text: "The birds are building a nest in the tree.", answer: "building" },
                { text: "They are building a hospital near the station.", answer: "building" },
                { text: "You need a strong foundation to build on.", answer: "build" }
            ]
        },
        {
            en: "building",
            ch: "建築物 (n.)",
            sents: [
                { text: "That is the tallest building in the city.", answer: "building" },
                { text: "The old building was made of stone.", answer: "building" },
                { text: "There are many office buildings in this area.", answer: "buildings" },
                { text: "He lives in that red brick building.", answer: "building" },
                { text: "The building has twenty floors.", answer: "building" },
                { text: "Entrance is at the front of the building.", answer: "building" },
                { text: "She works in a modern glass building.", answer: "building" },
                { text: "The building was damaged in the storm.", answer: "building" },
                { text: "Please don't smoke inside the building.", answer: "building" },
                { text: "We saw some historical buildings during the tour.", answer: "buildings" }
            ]
        },
        {
            en: "bus",
            ch: "巴士 (n.)",
            sents: [
                { text: "I catch the bus to work every morning.", answer: "bus" },
                { text: "The bus is very crowded during rush hour.", answer: "bus" },
                { text: "Which bus goes to the airport?", answer: "bus" },
                { text: "The bus stop is just around the corner.", answer: "bus" },
                { text: "We missed the last bus home.", answer: "bus" },
                { text: "The school bus arrives at 8 AM.", answer: "bus" },
                { text: "How much is the bus fare?", answer: "bus" },
                { text: "He is waiting for the bus in the rain.", answer: "bus" },
                { text: "The bus driver was very polite.", answer: "bus" },
                { text: "We took a long-distance bus to Nagoya.", answer: "bus" }
            ]
        },
        {
            en: "business",
            ch: "商業/生意 (n.)",
            sents: [
                { text: "He runs a successful clothing business.", answer: "business" },
                { text: "I'm here on business, not for a holiday.", answer: "business" },
                { text: "Starting a new business is risky.", answer: "business" },
                { text: "None of your business!", answer: "business" },
                { text: "She is studying business at college.", answer: "business" },
                { text: "The business is growing very fast.", answer: "business" },
                { text: "We need a better business plan.", answer: "business" },
                { text: "He is a very busy business man.", answer: "business" },
                { text: "The shop went out of business last year.", answer: "business" },
                { text: "It's a pleasure doing business with you.", answer: "business" }
            ]
        },
        {
            en: "busy",
            ch: "忙碌的 (adj.)",
            sents: [
                { text: "I am very busy preparing for the test.", answer: "busy" },
                { text: "The streets are always busy in the evening.", answer: "busy" },
                { text: "She has a busy schedule today.", answer: "busy" },
                { text: "He is busy fixing the car.", answer: "busy" },
                { text: "Don't bother him, he is busy.", answer: "busy" },
                { text: "This is a very busy restaurant.", answer: "busy" },
                { text: "I've had a busy week at work.", answer: "busy" },
                { text: "The phone line is busy right now.", answer: "busy" },
                { text: "Are you busy this weekend?", answer: "busy" },
                { text: "He kept himself busy with gardening.", answer: "busy" }
            ]
        },
        {
            en: "but",
            ch: "但是 (conj.)",
            sents: [
                { text: "I like tea, but I don't like coffee.", answer: "but" },
                { text: "He is young, but he is very wise.", answer: "but" },
                { text: "I tried my best, but I failed.", answer: "but" },
                { text: "It was raining, but we still went out.", answer: "but" },
                { text: "She is smart, but she is a bit lazy.", answer: "but" },
                { text: "I'm sorry, but I can't help you.", answer: "but" },
                { text: "The shoes are pretty, but they are too small.", answer: "but" },
                { text: "He wanted to come, but he was too tired.", answer: "but" },
                { text: "I have a cat, but I don't have a dog.", answer: "but" },
                { text: "The movie was long, but it was exciting.", answer: "but" }
            ]
        },
        {
            en: "butter",
            ch: "牛油 (n.)",
            sents: [
                { text: "I put some butter on my toast.", answer: "butter" },
                { text: "Keep the butter in the fridge.", answer: "butter" },
                { text: "Do you want butter or jam on your bread?", answer: "butter" },
                { text: "The cake recipe requires 100g of butter.", answer: "butter" },
                { text: "She melted the butter in a pan.", answer: "butter" },
                { text: "I can't believe it's not butter!", answer: "butter" },
                { text: "The butter is too hard to spread.", answer: "butter" },
                { text: "He likes to cook with a lot of butter.", answer: "butter" },
                { text: "Peanut butter is popular with kids.", answer: "butter" },
                { text: "The waiter brought some bread and butter.", answer: "butter" }
            ]
        },
        {
            en: "buy",
            ch: "買 (v.)",
            sents: [
                { text: "I want to buy a new phone.", answer: "buy" },
                { text: "Where did you buy that shirt?", answer: "buy" },
                { text: "I need to buy some milk on my way home.", answer: "buy" },
                { text: "Money can't buy happiness.", answer: "buy" },
                { text: "She bought a gift for her mother.", answer: "bought" },
                { text: "He is saving money to buy a car.", answer: "buy" },
                { text: "We should buy the tickets in advance.", answer: "buy" },
                { text: "What are you going to buy at the market?", answer: "buy" },
                { text: "I don't have enough money to buy this.", answer: "buy" },
                { text: "She decided not to buy the expensive bag.", answer: "buy" }
            ]
        }
    ],
    "L2": [
        {
            en: "ant",
            ch: "螞蟻 (n.)",
            sents: [
                { text: "The owls is carrying a crumb.", answer: "owls" },
                { text: "Owls like sweet food.", answer: "Owls" }
            ]
        },
        {
            en: "add",
            ch: "螞蟻 (n.)",
            sents: [
                { text: "The suggestion will be added to the proposal.", answer: "added" },
                { text: "He adds some e-books onto the database from time to time ", answer: "adds" }
            ]
        }
    ],
    // --- LEVEL 3: 同音字地獄 (測試 Listening 辨識力) ---
    "L3": [
        { en: "sea", ch: "大海", sent: "We swim in the sea every summer." }, // 同音: See
        { en: "see", ch: "看見", sent: "I can see the mountains from here." }, // 同音: Sea
        { en: "air-conditioner", ch: "冷氣機", sent: "I want to buy an air-conditioner." },
        { en: "low-quality", ch: "低質素", sent: "This is a low-quality hotel" },
        { en: "write", ch: "寫", sent: "Please write your name on the paper." } // 同音: Right
    ],

    // --- LEVEL 4: 連字符測試 (測試橙色 Hyphen) ---
    // 玩家只需輸入: highquality, icecream, parttime
    "L4": [
        { en: "high-quality", ch: "高品質", sent: "This shop sells high-quality goods." },
        { en: "ice-cream", ch: "雪糕", sent: "I want to eat chocolate ice-cream." },
        { en: "part-time", ch: "兼職", sent: "He has a part-time job at a cafe." }
    ],

    // --- LEVEL 5: 空格詞組測試 (測試空格處理) ---
    // 玩家只需輸入: cupoftea, livingroom, wakeup
    "L5": [
        { en: "cup of tea", ch: "一杯茶", sent: "Would you like a cup of tea?" },
        { en: "living room", ch: "客廳", sent: "We watch TV in the living room." },
        { en: "wake up", ch: "起床", sent: "I usually wake up at 7 am." }
    ],
    
    // --- LEVEL 5*: BOSS 級 (遊戲專屬) ---
    "L5_STAR": [
        { en: "battleship", ch: "戰艦", sent: "The battleship fired its main cannons." },
        { en: "surrender", ch: "投降", sent: "The enemy was forced to surrender." },
        { en: "victory", ch: "勝利", sent: "We celebrated our victory after the match." }
    ]
};
