<template>
  <div>
    <h3 align="center">Завдання <span>{{ count }}</span></h3>
    <div style=" " v-bind:style="{display:activeDisplayYoutube}" v-html="media"></div>
    <div class="tasks" style="padding-right: 40%">
      <br>
      <div v-bind:style="{display:textVisible}">{{task_text}}</div>
      <span><h2>{{ task }}</h2></span>
      <div v-bind:style="{display:actionDisplayMediaText}">
        <b-img :src="media_text" fluid alt="Responsive image"></b-img>
      </div>
      <br>
      <b-container v-bind:style="{display:activeDisplay}" fluid class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-img thumbnail fluid :src="A" alt="Image 1"></b-img>
          </b-col>
          <b-col>
            <b-img thumbnail fluid :src="B" alt="Image 2"></b-img>
          </b-col>
          <b-col>
            <b-img thumbnail fluid :src="C" alt="Image 3"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b>Виберіть одне:</b>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio-group
          id="btn-radios-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="radios-btn-default"
          buttons
      ></b-form-radio-group>
    </b-form-group>


    <div style="margin-top: 20px" class="container">
      <div class="row">
        <!--        <div class="col">-->
        <!--          <button type="button" @click="postNepost" class="btn btn-dark">Назад</button>-->
        <!--        </div>-->

        <div class="col">
          <button @click="postPost" type="button" class="btn btn-dark float-right">Вперед</button>
        </div>
      </div>
    </div>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    <!--<div>
        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>-->

  </div>
</template>

<script>
// import axios from 'axios';
import A1 from '../assets/ex/1A.jpg'
import A2 from '../assets/ex/2A.jpg'
import A3 from '../assets/ex/3A.jpg'
import B1 from '../assets/ex/1B.jpg'
import B2 from '../assets/ex/2B.jpg'
import B3 from '../assets/ex/3B.jpg'
import C1 from '../assets/ex/1C.jpg'
import C2 from '../assets/ex/2С.jpg'
import C3 from '../assets/ex/3C.jpg'
import TEXT17 from '../assets/ex/17.jpg'
import TEXT18 from '../assets/ex/18.jpg'
import TEXT19 from '../assets/ex/19.jpg'
import TEXT20 from '../assets/ex/20.jpg'
import TEXT21 from '../assets/ex/21.jpg'
import router from "../router"

export default {
  name: "Task",
  data() {
    return {
      A1, B1, C1,
      A2, B2, C2,
      A3, B3, C3,
      ex_27_33:"CONTEMPORARY ART\n" +
          "Read the text below. Mark true (T) or false (F) sentences. Write your answers on the answer sheet. \n" +
          "\tContemporary art is defined as the work of artists who are living in the twenty-first century. It mirrors contemporary" +
          " culture and society, offering teachers, students, and general audiences a rich resource through which to consider current " +
          "ideas and rethink the familiar. The work of contemporary artists is a dynamic combination of materials, methods, concepts, " +
          "and subjects that challenges traditional boundaries and defies easy definition. Diverse and eclectic, " +
          "contemporary art is distinguished by the very lack of a uniform organizing principle, " +
          "ideology, or -ism. In a globally influenced, culturally diverse, and technologically advancing world, " +
          "contemporary artists give voice to the varied and changing cultural landscape of identity, values, and beliefs. \n" +
          "\tArt can exist outside of traditional exhibition forums - including public spaces, site-specific locations," +
          " non-art sites - and is often presented in innovative ways - as an installation, an event, a performance, " +
          "online, or as documentation of an impermanent work. \n",
      task_text: "CAREER IDEAS FOR DIFFERENT PERSONALITY TYPES \n" +
          "\tTo find career ideas that will suit your personality, the first step is to complete a personality-based career test. This will enable you to see which careers are most popular for your personality type. \n" +
          "22) ___\n" +
          "\tChoosing a new career is one of the most meaningful resolution you will ever make. It can affect your happiness and prosperity for many years to come.\n" +
          "23) ___\n" +
          "\tThe degree to which your personality matches your career is a big factor in whether you will enjoy it. A poor match can lead to demotivation and poor performance. A good match means you are more likely to be successful and will enjoy going to work. \n" +
          "24) ___\n" +
          "\tIf a career looks attractive, it does not necessarily mean you will enjoy it. The experience of a career from within is often different to how it appears to those outside the career. This means you need to speak to people who are already in the career to find out what it is like. This can be a very time-consuming task and, for most people, this amount of research is not practical.\n" +
          "25) ___\n" +
          "\tWe have done the research for you. We gathered the views of 17,000 people in work, to detect what each career is like. We also built personality profiles for each career, so they could be compared with your personality. Based on the research, it gives you lots of career analysis, such as an estimate of how much you will enjoy each career and what you might like or dislike about it.\n" +
          "26) ___\n" +
          "\tAnother way to find career ideas is to look at those careers each personality type chooses most frequently. However, this does not necessarily lead to the most enjoyable career. You can see frequently-chosen careers for each type by clicking on your type in the table, right. If you don't know your personality type, complete our free personality test first.\n ",
      ex_33_42:"The Eurovision Song Contest is a (33)… competition which is held annually among the member countries of the" +
          " European Broadcasting Union. Each country is represented (34)… only one candidate who is chosen beforehand. The" +
          " songs performed shouldn't last longer than three minutes. The festival takes place on (35)… television. After " +
          "all the candidates (36)... their songs, the judges and the audience vote for the other countries' songs to" +
          " determine the most popular song in the competition. The contest has been broadcast (37)… its inauguration " +
          "in 1956 and it has proved to be one of the most watched non-sporting events in the world. Since 2000 " +
          "Eurovision has also been broadcast (38)… its Internet website. The winners of the contest usually have " +
          "short-term success. Among (39)… notables there are ABBA (winner of 1974), and Celine Dion (winner of 1988)." +
          " The record for the highest number of wins belongs to Ireland (40)... has won the competition seven times." +
          " The first contest was held in Lugano, Switzerland and was won by the host country. The second one was hosted i" +
          "n Germany. After that it was decided that (41)… the winning country would host the contest the next year." +
          " In the 1960s and 1970s some countries declined for particular reasons, so other countries agreed to host" +
          " instead. As Eurovision is a live show it gives every participant an opportunity to rehearse on the stage " +
          "of the Eurovision auditorium during several days before (42)… Saturday show. " +
          "The countries participants should observe numerous detailed rules, and their new version is produced each year.",
      actionDisplayMediaText: 'none',
      textVisible:"none",
      media_text: TEXT17,
      TEXT17,
      TEXT18,
      TEXT19,
      TEXT20,
      TEXT21,
      A: A1, B: B1, C: C1,

      media: ` <iframe width="560" height="315" src="https://www.youtube.com/embed/0cSt9R_lvYI?controls=0"
                             title="YouTube video player" frameborder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen></iframe>`,
      task: "",
      media_answers: `<b-container v-bind:style="activeDisplay" fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid :src="A" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src="B" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src="C" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>`,
      ex_43_48:"Read the text and answer the questions 43-48. Choose A, B, C or D. \n" +
          "Mini is a British automotive brand which is actually owned by BMW corporation " +
          "that specialises in small cars. The original Mini was a line of iconic British " +
          "small cars which were produced by the British Motor Corporation in the years of 1959-2000." +
          " In 1969 Mini became a brand in its own right. Performance versions of its models " +
          "used the name Cooper. The name originated thanks to the partnership with John Cooper, " +
          "a racing legend. In 2000 Rover Group, including Mini, was acquired by BMW with BMW retaining" +
          " the Mini brand. Until 2000 two-door cars were manufactured. In 1995 the successor's development" +
          " began and since 2001 a new-generation car has been produced. The current Mini range includes " +
          "three-door and five-door models, both hatchbacks and crossovers. Mini vehicles have taken part " +
          "in rallies and Mini Cooper S won the Monte Carlo Rally on three occasions in the 1960s. The original" +
          " two-door Mini was the winner of numerous prestigious awards in the 1990s which have been followed by " +
          "other vehicles of the brand in the 21st century. The classic Mini has been criticised a lot for " +
          "its security. In response to all these accusations the car creator said: I do not design cars to " +
          "see them crushed. Many celebrities owned a Mini. Even Enzo Ferrari, the founder of the Ferrari " +
          "automobile brand and a motor racing team of the same name, had three classic Minis in his garage." +
          " The cars' unique front-wheel drive layout ? with the engine sideways ? allowed for 80% of the " +
          "internal space of the car to be used for passengers, which explains how four people could fit " +
          "relatively comfortably in a small space. There are some 469 Mini clubs in the UK and at least " +
          "another 260 worldwide. The car is continually voted one of the most favourite cars of all time" +
          " and it was recently voted Britain's favourite car ever produced.\n" +
          "\n",
      count: 1,
      ex_49_54:"\n" +
          "RHYTHM AND BLUES\n" +
          "Rhythm and blues (or R&B), a popular music genre 49)__ jazz, gospel, and blues influences, is" +
          " a musical term 50)__ the rich and varied folk music of the African Americans 51)__ other Americans." +
          " First performed by African American artists, rhythm and blues became the biographical mirrors of " +
          "work songs, ballads or lyrics from minstrel shows, church hymns and gospel music, and some of the " +
          "secular music of America in 52)__ . The combination of rhythm and blues 53)__ forth the manifestation" +
          " of particular emotions by the singer or lead instrument in reflections of the very melodic and" +
          " soulful \"blues\" 54)__ an accompaniment of \"rhythmic\" concentration and force.\n",
      activeDisplay: 'block',
      activeDisplayYoutube: 'block',
      texts: [],
      json: [
        {
          "task": "What dress is the speaker looking for?",
          "answers": ["1", "2", "3"]
        },
        {
          "task": "When would the man like to be woken up?",
          "answers": ["1", "2", "3"]
        },
        {
          "task": "What kind of food CAN’T be served to the traveller?",
          "answers": ["1", "2", "3"]
        },
        {
          "task": "What does the speaker enjoy about his new place?",
          "answers": ["nature", "neighbours", "houses"]
        },
        {
          "task": "What did the fashionable stylist buy for her daughter in Tokyo?",
          "answers": ["girlie clothes", "stylish tops", "great footwear"]
        },
        {
          "task": "Why does the man feel bad?",
          "answers": ["He has severe food poisoning.", "He has a catching illness.", "He is under considerable stress."]
        },
        {
          "task": "The speaker has taken up numerous hobbies.",
          "answers": ["True", "False"]
        },
        {
          "task": "The speaker started making clothes when she was a child.",
          "answers": ["True", "False"]
        },
        {
          "task": "The speaker’s friends are passionate readers of her fashion blog.",
          "answers": ["True", "False"]
        },
        {
          "task": "The speaker thinks fashion is a rather expensive hobby.",
          "answers": ["True", "False"]
        },
        {
          "task": "The speaker hopes to build her career in fashion business.",
          "answers": ["True", "False"]
        },
        {
          "task": "Why did the head teacher introduce changes in the timetable?",
          "answers": ["He acted according to the results of a study.", "He accepted the suggestion of the teenagers’ parents.", "He followed the practice of Oxford University."]
        },
        {
          "task": "What does a 'flexible day' mean for these teenage students?",
          "answers": ["They have classes of different length.", "They come to school later three days a week.", "They are free to choose time for work experience."]
        },
        {
          "task": "Why do the students start school early on Friday?",
          "answers": ["The teachers refuse to work overtime.", "School closes earlier before the weekend.", "The students have decided it themselves."]
        },
        {
          "task": "What has changed since the introduction of a 'flexible day'?",
          "answers": ["The students miss fewer classes.", "The teenagers have stopped fighting.", "The kids spend more time with their parents."]
        },
        {
          "task": "Who was against the experiment?",
          "answers": ["local mass media", "teachers from other colleges", "the teenagers’ parents"]
        },
        {
          "task": "Which of the advertisements deals with ________?",
          "answers": ["health care", "housework assistance", "domestic IT support", "a family journey", "car purchasing", "animal keeping", "an educational vacation", "an art competition"]
        },
        {
          "task": "Which of the advertisements deals with ________?",
          "answers": ["health care", "housework assistance", "domestic IT support", "a family journey", "car purchasing", "animal keeping", "an educational vacation", "an art competition"]
        },
        {
          "task": "Which of the advertisements deals with ________?",
          "answers": ["health care", "housework assistance", "domestic IT support", "a family journey", "car purchasing", "animal keeping", "an educational vacation", "an art competition"]
        },
        {
          "task": "Which of the advertisements deals with ________?",
          "answers": ["health care", "housework assistance", "domestic IT support", "a family journey", "car purchasing", "animal keeping", "an educational vacation", "an art competition"]
        },
        {
          "task": "Which of the advertisements deals with ________?",
          "answers": ["health care", "housework assistance", "domestic IT support", "a family journey", "car purchasing", "animal keeping", "an educational vacation", "an art competition"]
        },
        {
          "task": "Read the text. For questions (22-26) choose the correct answer (A-F). There are two choices you do not need.",
          "answers": ["The need for research", "Find out which careers you will enjoy", "Take care of your health", "An important decision", "The impact of personality", "Discover your personality type", "Get some practical skills"]
        },
        {
          "task": "Read the text. For questions (22-26) choose the correct answer (A-F). There are two choices you do not need.",
          "answers": ["The need for research", "Find out which careers you will enjoy", "Take care of your health", "An important decision", "The impact of personality", "Discover your personality type", "Get some practical skills"]
        },
        {
          "task": "Read the text. For questions (22-26) choose the correct answer (A-F). There are two choices you do not need.",
          "answers": ["The need for research", "Find out which careers you will enjoy", "Take care of your health", "An important decision", "The impact of personality", "Discover your personality type", "Get some practical skills"]
        },
        {
          "task": "Read the text. For questions (22-26) choose the correct answer (A-F). There are two choices you do not need.",
          "answers": ["The need for research", "Find out which careers you will enjoy", "Take care of your health", "An important decision", "The impact of personality", "Discover your personality type", "Get some practical skills"]
        },
        {
          "task": "Read the text. For questions (22-26) choose the correct answer (A-F). There are two choices you do not need.",
          "answers": ["The need for research", "Find out which careers you will enjoy", "Take care of your health", "An important decision", "The impact of personality", "Discover your personality type", "Get some practical skills"]
        },
        {
          "task": "Contemporary art has been and continues to be created during our lifetimes.",
          "answers": ["True", "False"]
        },
        {
          "task": "Contemporary art reflects a wide range of materials, media, and technologies, as well as opportunities to consider what art is and how it is defined.",
          "answers": ["True", "False"]
        },
        {
          "task": "A work of art can be produced using only one working method.",
          "answers": ["True", "False"]
        },
        {
          "task": "Art can serve as a form of critique.",
          "answers": ["True", "False"]
        },
        {
          "task": "Contemporary art never appropriates elements from multiple disciplines and sources.",
          "answers": ["True", "False"]
        },
        {
          "task": "Art is sometimes shown in innovative ways.",
          "answers": ["True", "False"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["singers", "singing", "song", "singer’s"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["by", "with", "for", "as"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["life", "living", "live", "the live"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["performance", "have performed", "performing", "performed"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["since", "from", "for", "at"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["across", "through", "via", "by"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["many", "little", "a few", "few"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["who", "where", "which", "because"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["henceforth", "therefore", "moreover", "however"]
        },
        {
          "task": "Read the text and choose A, B, C or D for each space 33-42.",
          "answers": ["a", "the", "an", "-"]
        },
        {
          "task": "Who owns the Mini automobile brand?",
          "answers": ["The British Motor Corporation.", "The Bavarian Motor Works.", "The Rover Group.", "John Cooper."]
        },
        {
          "task": "What is true about the name of Mini Cooper?",
          "answers": ["It appeared due to a famous racer.", "It was iconic for the British.", "It only existed until 2000.", "It is used to talk about all Mini cars."]
        },
        {
          "task": "What is true about two-door cars?",
          "answers": ["They are not produced any more.", "They were the only Mini cars up to the 21st century.", "They are more popular than three-door cars.", "They can be hatchbacks or crossovers."]
        },
        {
          "task": "What are the results of participating of Mini in rallying?",
          "answers": ["Mini Cooper S won three races in 1960.", "One of the Mini models was a prestigious race winner several times.", "Mini cars don't usually take part in rallies.", "The Monte Carlo Rally was once won by a Mini car."]
        },
        {
          "task": "Which of the following is stated in the text?",
          "answers": ["Mini cars' security has been evaluated as insufficient.", "Minis are owned by Ferrari motor racing team members.", "Mini cars have not received any awards since 2000.", "The Mini car creator designed it to be crushed."]
        },
        {
          "task": "What isn't a proof of high popularity of Mini cars?",
          "answers": ["There are plenty of Mini clubs both in the UK and all over the world.", "The car was recently voted Britain's favourite car ever produced.", "The car allows enough internal space for four passengers.", "The car has been awarded a prize in different nominations."]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["combined", "having combined", "combines", "combining"]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["to", "for", "of", "on"]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["of course", "both", "as well as", "too"]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["the 1900s’", "the 1900", "1900s", "the 1900s"]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["brought", "brings", "was brought", "have brought"]
        },
        {
          "task": "Read the text. For questions (49-54) choose the correct answer (A, B, C or D).",
          "answers": ["also", "about", "with", "but"]
        },
        {
          "task": "We … to Ireland for our holidays last year.",
          "answers": ["goes", "going", "have gone", "went"]
        },
        {
          "task": "Robert … ill for three weeks. He's still in hospital.",
          "answers": ["had been", "has been", "is", "was"]
        },
        {
          "task": "My arms are aching now because … since two o'clock.",
          "answers": ["I'm swimming", "I swam", "I swim", "I've been swimming"]
        },
        {
          "task": "I'm very tired. … over four hundred miles today.",
          "answers": ["I drive", "I'm driving", "I've been driving", "I've driven"]
        },
        {
          "task": "When Martin … the car, he took it out for a drive.",
          "answers": ["had repaired", "has repaired", "repaired", "was repairing"]
        },
        {
          "task": "Janet was out of breath because … .",
          "answers": ["she'd been running", "she did run", "she's been running", "she's run"]
        },
        {
          "task": "Don't worry. I … be here to help you.",
          "answers": ["not", "shall", "willn't", "won't"]
        },
        {
          "task": "Our friends … meet us at the airport tonight.",
          "answers": ["are", "are going to", "go to", "will be to"]
        },
        {
          "task": "… a party next Saturday. We've sent out the invitations.",
          "answers": ["We had", "We have", "We'll have", "We're having"]
        },
        {
          "task": "I'll tell Anna all the news when … her.",
          "answers": ["I'll see", "I'm going to see", "I see", "I shall see"]
        },
        {
          "task": "At this time tomorrow … over the Atlantic.",
          "answers": ["we flying", "we'll be flying", "we'll fly", "we to fly"]
        },
        {
          "task": "Where's Robert? … a shower?",
          "answers": ["Does he have", "Has he", "Has he got ", "Is he having"]
        },
        {
          "task": "I … like that coat. It's really nice.",
          "answers": ["am", "do", "very", "yes"]
        },
        {
          "task": "(Modal verbs) The chemist's was open, so luckily I … buy some aspirin.",
          "answers": ["can", "can't", "did can", "was able to"]
        },
        {
          "task": "Susan has to work very hard. I … do her job, I'm sure.",
          "answers": ["can't", "couldn't", "don't", "shouldn't"]
        },
        {
          "task": "We had a party last night. … spend all morning clearing up the mess.",
          "answers": ["I must have", "I've been to", "I've had to", "I've must"]
        },
        {
          "task": "(The passive) We can't go along here because the road is … .",
          "answers": ["been repaired", "being repaired", "repair", "repaired"]
        },
        {
          "task": "Some film stars … be difficult to work with.",
          "answers": ["are said", "are said to", "say", "say to"]
        },
        {
          "task": "(The infinitive and the –ing) The driver was arrested for failing … an accident.",
          "answers": ["of report", "report", "reporting", "to report"]
        },
        {
          "task": "Someone suggested … for a walk.",
          "answers": ["go", "going", "of going", "to go"]
        },
      ],
      selected: 'Пока нечего не выбрано',
      options: [],
      alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],

      /*errors: [] */
    }
  },


  methods: {


    postPost: function () {
      if (this.selected === 'Пока нечего не выбрано') {
        alert("Выберите один из вариантов")
        return
      }
      this.count++;
      if (this.count == 2) {
        this.media = ` <iframe width="560" height="315" src="https://www.youtube.com/embed/aAR3-W1yXtI?controls=0"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture" allowfullscreen></iframe>`
        this.A = this.A2
        this.B = this.B2
        this.C = this.C2
      } else if (this.count == 3) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/pK12zKZEWpU?controls=0"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
        this.A = this.A3
        this.B = this.B3
        this.C = this.C3
      } else if (this.count == 4) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/ubtgaoFDgrw?controls=0"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
        this.activeDisplay = 'none';
      } else if (this.count == 5) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/BY5rykNDjxk?controls=0"
 title="YouTube video player" frameborder="0" allow="accelerometer;
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
      } else if (this.count == 6) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/I9yJrBFLNLw?controls=0"
 title="YouTube video player" frameborder="0" allow="accelerometer;
 autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
      } else if (this.count >= 7 && this.count <= 12) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/7TvmGnXwaYI?controls=0"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
 clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
      } else if (this.count >= 13 && this.count <= 16) {
        this.media = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/1jvjzS3x9X4?controls=0"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
      } else if (this.count == 17) {
        this.activeDisplayYoutube = 'none'
        this.actionDisplayMediaText = 'block'
      } else if (this.count == 18) {
        this.media_text = this.TEXT18
      } else if (this.count == 19) {
        this.media_text = this.TEXT19
      } else if (this.count == 20) {
        this.media_text = this.TEXT20
      } else if (this.count == 21) {
        this.media_text = this.TEXT21
      }else if (this.count == 22) {
        this.actionDisplayMediaText = 'none'
        this.textVisible = "block"
      }else if (this.count == 27 ) {
        this.task_text = this.ex_27_33
      }else if (this.count == 33 ) {
        this.task_text = this.ex_33_42
      }else if (this.count == 43 ) {
        this.task_text = this.ex_43_48
      }else if (this.count == 49 ) {
        this.task_text = this.ex_49_54
      }else if (this.count == 55 ) {
        this.textVisible = "none"
      }else if (this.count == 75 ) {

        router.push("/result")
      }

      this.options = [];
      this.selected = "Пока нечего не выбрано"
      let json = this.json;
      // console.log(json)
      this.task = this.json[this.count - 1].task
      for (let ans in json[this.count - 1].answers) {
        // this.options+=
        this.options = [...this.options, {text: json[this.count - 1].answers[ans], value: this.alphabet[ans]}]
      }
      //
      // {text: 'Radio 1', value: 'radio1'},
      // {text: 'Radio 3', value: 'radio2'},
      // {text: 'Radio 4', value: 'radio4'}
      // const str = JSON.stringify(this.postBody);
      // axios.post('http://localhost:8000/', str)
      //     .then((response) => {
      //         console.log(response);
      //     })
      //     .catch((error) => {
      //         console.log(error);
      //     });
    }
  },
  beforeMount() {
    this.task = this.json[0].task
    for (let ans in this.json[0].answers) {
      this.options = [...this.options, {text: this.json[0].answers[ans], value: this.alphabet[ans]}]
    }
  }
}
</script>


<style scoped>

</style>
