// y is variable counting
const calc = new Vue({
    el: "#header",
    data: {
        marks: [
            
        ],
        mark: [

        ],
        weights: [

        ],
        weight: [

        ],
        x: 0,
        y: 0,
        total: 0,
        totalWeight: 0,
        averageMark: 0,
    },
    
    methods: {
        addMark: function(){
            const marks = document.querySelector(".marks");
            
            this.marks.push(this.mark[this.x]);
            this.weights.push(this.weight[this.x]);         
            this.total += parseFloat(this.marks[this.x] * this.weights[this.x]);
            this.totalWeight += parseFloat(this.weights[this.x]);
            

            for(var count = 0; count < this.marks.length; count++){
                this.averageMark = this.total / this.totalWeight;
            }


            const newMark = document.createElement('div');
            newMark.classList.add('mark');
            const titleMark = document.createElement('h1')
            titleMark.innerText = this.marks[this.x];
            marks.append(newMark);
            newMark.append(titleMark)
            this.x++;
        }
            
        },
    });
