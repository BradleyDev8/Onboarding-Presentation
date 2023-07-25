import React from 'react';



const ReactAccordion: React.FC = () => {
    
    
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 shadow-lg shadow-primary border border-primary mt-8 mb-8">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is React?
        </div>
        <div className='collapse-content justify-center'>
            <p className='py-6 font-semibold'>
                React is a JavaScript library for building user interfaces (like this presentation), it was created by Facebook. React uses JSX which is a XML syntax extension to JavaScript but in our case we use TSX which is a TypeScript syntax extension.
            </p>
            <p className=' font-semibold'>
                React is like lego in simple terms, it uses many components that end up building an application just like lego uses many blocks to build a house. For example, this box is part of an Accordion component that has been imported onto this page.
            </p>
        </div>
        
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-lg shadow-primary border border-primary mb-8">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          React Workshop
        </div>
        <div className='collapse-content  justify-center'>
        <p className="py-6 font-semibold">
            The React onboarding process included a workshop that tasked us with
            challanges such as:
          </p>
          <div className="flex justify-center font-semibold">
            <ul className="list-disc mr-6 text-left">
              <li>Creating a blog Page</li>
              <li>Add re-usable Nav Bar component</li>
              <li>Update links to Nav Bar</li>
              <li>Adding an image</li>
              <li>Using Flexbox</li>
              <li>Adding another page</li>
            </ul>
          </div>
          <button
              role="link"
              onClick={() => openInNewTab("http://localhost:3001/")}
              className="btn btn-primary mt-4 "
            >
              Click me to see React WorkShop😎
            </button>
          
        </div>
        
      </div>
      <div className="collapse collapse-arrow bg-base-200 shadow-lg shadow-primary border border-primary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Typescript
        </div>
        <div className="collapse-content justify-center">
          <p className='py-6 font-semibold'>
            TypeScript is a programming language built on JavaScript, it is essentially JavaScript but with additional feautures that help you write safer and more structured code by adding more tools and rules.
          </p>          
        </div>
      </div>
    </>
  );
};

export default ReactAccordion;
