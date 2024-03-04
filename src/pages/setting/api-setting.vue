<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const url = ref("");
const name = ref("");

async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
    <div class="box">
        <div class="flex setting-input">
            <span style="width: 100px;">url:</span>
            <el-input v-model="input" style="width: 400px" placeholder="请输入URL地址" />
        </div>
        <div class="flex setting-input">
            <span>key:</span>
            <el-input v-model="input" style="width: 400px" placeholder="请输入URL地址" />
        </div>
        <div class="flex setting-input">
            <span>secret key:</span>
            <el-input v-model="input" style="width: 400px" placeholder="请输入URL地址" />
        </div>
        <div class="setting-input">
            <el-button type="success">保存</el-button>
        </div>
    </div>
</template>

<style>

.box{
    padding: 10px;
    text-align: center;
}


.setting-input{
    margin-top: 12px;
}
</style>