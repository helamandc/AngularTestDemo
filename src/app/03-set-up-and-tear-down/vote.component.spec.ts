import { Component } from '@angular/core';
import { VoteComponent } from './vote.component';//this is automaticall added in the code when you start using the method or create an instance of a class from the ts file.

describe('VoteComponent', () => {
    //let component = new VoteComponent;
    let component: VoteComponent;

    beforeEach(() => {//similar to 'set up' in NUnit
        component = new VoteComponent;
    })

    // afterEach(() => { // similar to 'tear down' in NUnit

    // })

    //beforeAll and afterAll are similar to One time set up and One time tear down in NUnit


    it('should increment totalVotes when upvoted', () => {
        component.upVote();
        expect(component.totalVotes).toBe(1);
    })

    it('should decrement totalVotes when downvoted', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    })
})