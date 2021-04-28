<template>
  <div>
    <h3 align="center">Завдання <span>{{ count }}</span></h3>
    <div v-html="media"></div>
    <span>{{ task }}</span>

    <br><br>

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
        <div class="col">
          <button type="button" @click="postNepost" class="btn btn-dark">Назад</button>
        </div>

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


export default {
  name: "Task",
  data() {
    return {
      media: ` <iframe width="560" height="315" src="https://www.youtube.com/embed/0cSt9R_lvYI"
                             title="YouTube video player" frameborder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen></iframe>`,
      task: "",
      count: 1,
      texts:[],
      json: [
        {
          "task": "What dress is the speaker looking for?",
          "answers": ["photo", "photo", "photo"]
        },
        {
          "task": "When would the man like to be woken up?",
          "answers": ["photo", "photo", "photo"]
        },
        {
          "task": "What kind of food CAN’T be served to the traveller?",
          "answers": ["photo", "photo", "photo"]
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
          "task": "The chemist's was open, so luckily I … buy some aspirin.",
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
          "task": "We can't go along here because the road is … .",
          "answers": ["been repaired", "being repaired", "repair", "repaired"]
        },
        {
          "task": "Some film stars … be difficult to work with.",
          "answers": ["are said", "are said to", "say", "say to"]
        },
        {
          "task": "The driver was arrested for failing … an accident.",
          "answers": ["of report", "report", "reporting", "to report"]
        },
        {
          "task": "Someone suggested … for a walk.",
          "answers": ["go", "going", "of going", "to go"]
        },
      ],
      selected: 'Пока нечего не выбрано',
      options: [],
      alphabet: ["a", "b", "c", "d", "e", "f", "g"],
      /*errors: [] */
    }
  },


  methods: {

    postNepost() {
      if (this.count > "1")
        this.count--;
    },
    postPost: function () {
      if (this.selected === 'Пока нечего не выбрано') {
        alert("Выберите один из вариантов")
        return
      }
      this.count++;
      if (this.count == 2) {
        this.media =` <iframe width="560" height="315" src="https://www.youtube.com/embed/0cSt9R_lvYI"
                             title="YouTube video player" frameborder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowfullscreen></iframe>`
      }
      this.options = [];
      this.selected = "Пока нечего не выбрано"
      let json = this.json;
      // console.log(json)
      this.task = this.json[this.count - 1].task
      for (let ans in json[this.count].answers) {
        // this.options+=
        this.options = [...this.options, {text: json[this.count].answers[ans], value: this.alphabet[ans]}]
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
    for (let ans in this.json[1].answers) {
      this.options = [...this.options, {text: this.json[this.count].answers[ans], value: this.alphabet[ans]}]
    }
  }
}
</script>


<style scoped>

</style>
