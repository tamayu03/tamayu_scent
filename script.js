new Vue({
  el:"#app",
  data: {
    showContent : false
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  }
})

//openModalコンポーネント
  Vue.component('openModal',{

    template:`
    <div id="overlay" v-on:click="clickEvent">
      <div id ="content" v-on:click="stopEvent">
        <p><slot></slot></p>
        <button v-on:click="clickEvent">close</button>
      </div>
    </div>
    `,

    methods :{
      clickEvent: function(){
        // 子コンポーネントから親コンポーネントへの通知
        this.$emit('from-child')
      },
      stopEvent: function(){
        event.stopPropagation()
      }
    }

  })


// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);

// モーダルを開いてその中の結果をいろいろと変える処理をする
function modalOpen() {
  modal.style.display = 'block';

// ラジオボタンの要素を取得する
  const form = document.forms.question;
	const q0Value = form.q0.value;
	const q1Value = form.q1.value;
	const q2Value = form.q2.value;
	const resultValue = q0Value + q1Value + q2Value;
// モーダルの中の結果要素を取得する
  const resultModal = document.getElementsByTagName("p");
// resultValueの結果で表示内容を変える
  if (resultValue === "aaa" || resultValue === "aba"){
    resultModal[0].innerText = "Diptyque オーローズ "
  }

  else if (resultValue === "aab" || resultValue === "abc"){
    resultModal[0].innerText = "Fuegia エンデバー"
  }

  else if (resultValue === "aac"){
    resultModal[0].innerText = "Guerlain ハーバ フレスカ"
  }
  
  else if (resultValue === "abb" ){
    resultModal[0].innerText = "OFFICINE UNIVERSELLE BULY ヴァルパンソンの浴女"
  }

  else if (resultValue === "baa" || resultValue === "bac"){
    resultModal[0].innerText = "canoma 早蕨"
  }

  else if (resultValue.charAt(0) === "b"){
    
    resultModal[0].innerText = "L'Orchestre Parfum ピアノサンタル"
  }
  
  else {
    resultModal[0].innerText = "Guerlain オースクレット"
  }
   
}


// モーダル以外をクリックすると閉じる（まだ理解が足りていない！！！）
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}