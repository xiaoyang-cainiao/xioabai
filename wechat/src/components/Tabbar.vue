<template>
  <van-tabbar v-model="active" active-color="#07c160" route>
  
    <van-tabbar-item icon="chat-o" replace to="/home">微信</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/addressbook">通讯录</van-tabbar-item>
    <van-tabbar-item icon="smile-o" replace to="/discover">发现</van-tabbar-item>
    <van-tabbar-item icon="user-o" replace to="/my">我</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);
</script>
