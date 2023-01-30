//VoteComponent is the class and inside it are 2 methods or functions, upVote and downVote

export class VoteComponent {

    totalVotes = 0;

    upVote(){
        this.totalVotes++;
    }

    downVote(){
        this.totalVotes--;
    }

}