<template>
  <section id="contact">
    <div class="video-background">
      <video autoplay loop muted plays-inline>
        <source :src="rideVideo" type="video/mp4" />
      </video>
    </div>
    <p class="section_text_p1">Get in touch with me!</p>
    <h1 class="title">Contact Info</h1>

    <form @submit.prevent="submitForm">
      <label>Email:</label>
      <input type="email" v-model="email" placeholder="Enter your email" required />

      <label>Message:</label>
      <textarea v-model="message" rows="4" placeholder="Type your message..." required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script setup>
import rideVideo from '@/assets/ride.mp4'
import { ref } from 'vue'

const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`Thank you! Your message has been sent:\nEmail: ${email.value}\nMessage: ${message.value}`)
  email.value = ''
  message.value = ''
}
</script>
