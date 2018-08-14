<!-- <template>
    <div class="columns">
        <div class="column content">
            <h5>Select area of Interest</h5>
            <select>
                <option v-for="sec in sections" :value="sec">
                    {{sec}}
                </option>
            </select>
            <button class="button is-small is-rounded is-info" @click="handleRetrieve">Retrieve</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sections: {
                type: Array
            }
        },
        methods: {
            handleRetrieve() {
                this.$emit('retrieve', this.sec);
            }
        }
    }
</script>

<style scoped>
    h5 {
        color: #fff;
        margin-bottom: 5px;
    }
</style> -->