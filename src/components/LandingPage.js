import React from 'react';
import * as Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;



function LandingPage() {

    var Events = Scroll.Events;

    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', to, element);
    });

    return (
          <main className='main-content'>
              <div className='tl-sh'>
                Charles McNamara
              </div>
              <div className='splash__wrapper'>
                <img className="site-opener-image" src="img/charlie_white4.png" />
                <div className="counter__wrapper">
                  <div className="counter-section">
                    <h1 className="counter-section__heading">1</h1> 
                    <h2 className="counter-section__subheading">Shaping And Architecture</h2> 
                    <p className='counter-exp'>The initial stage of any contract, we'll discuss pay, strategy, and tooling. We'll make basic project decisions and I'll lift from you a good interpretation of your goals for the project. This stage ends when architecture has been documented and an SOW and MSA signed.</p>
                  </div>
                  <div className="counter-section">
                    <h1 className="counter-section__heading">2</h1> 
                    <h2 className="counter-section__subheading">Research and Development</h2> 
                    <p className='counter-exp'>Once I have a general idea of a client's needs I can begin research. This often runs in tandem with stage 1. After I have completed information gathering I begin development with regular meetings with the client. This ensures a quality product that meets all the customers wants.</p>
                  </div>
                  <div className="counter-section">
                    <h1 className="counter-section__heading">3</h1> 
                    <h2 className="counter-section__subheading">QA and Bug Testing</h2> 
                    <p className='counter-exp'>After a product has been completed in development there is more time needed for adequate unit testing and QA. I strive to deliver products without bugs and errors and if something goes wrong after the contract I'll be there to fix it.</p>
                  </div>
                  <div className="counter-section">
                    <h1 className="counter-section__heading">4</h1> 
                    <h2 className="counter-section__subheading">Contract Termination</h2> 
                    <p className='counter-exp'>After the contract and any contract extensions end, the contract will be terminated. Iterative work will need a contract renewal where we'll begin from Stage 1 again. I hand over a finished product and documentation to boot. I'm always ready to take on more contracts if you need the help again.</p>
                  </div>
                </div>
                <div className='timeline_wrapper'>
                  
                </div>
              </div>
          </main>
    );
}


export default LandingPage;