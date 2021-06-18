import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, PopoverHeader, PopoverBody, popoverOpen } from 'reactstrap';

//import Popover from './Popover';

function App() {
  const [inputList, setInputList] = useState([{}]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [errorsExceptions, setErrorsExceptions] = useState('');
  const [googled, setGoogled] = useState('');
  const [testCaseStep, setTestCaseStep] = useState('');
  const [testCaseExpectation, settestCaseExpectation] = useState();
  const [testCaseResult, setTestCaseResult] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);

  const formInfo = {
    issueDiscription: description,
    issueLink: link,
    issueErrorsExceptions: errorsExceptions,
    googleResults: googled,
    testCaseStepInfo: testCaseStep,
    testCaseExpectationInfo: testCaseExpectation,
    testCaseResultInfo: testCaseResult
  };

  useEffect(() => {
    console.log('list: ', inputList);
  });

  // const list = [...inputList];

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   list[index][name] = value;
  //   setInputList(list);
  //   //testCaseStep += testCaseStep;
  // };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    inputList.splice(index, 1);
    setInputList([...inputList]);
  };

  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([...inputList, formInfo]);
  };

  const showList = () => {
    //setInputList([...inputList, formInfo]);
    console.log('list: ', inputList);
    document.designMode = 'on';
    document.execCommand('copy');
  };

  console.log(
    'form labels though: ',
    document.querySelectorAll('form-control').textContent
  );

  const togglePopover = () => {
    const closePopover = setTimeout(() => setPopoverOpen(false), 3000);
    setPopoverOpen(closePopover);
  };

  function copyToClip(str) {
    function listener(e) {
      e.clipboardData.setData('text/html', str);
      e.clipboardData.setData('text/plain', str);
      e.preventDefault();
    }
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  return (
    <div className='App container justify-content-center'>
      <h3>SDMM Guidance Request Form</h3>
      <form style={{ width: '80%' }} onSubmit={showList} id='form'>
        <p>
          Thank you for taking the time to take this important step! Yes, we
          know guidance requests can be a hassle. But the truth is not only do
          they help us help you, they help <em>you</em> help you by making you
          better at communicating issues in a way your team members can act upon
          without a lot of back and forth. This is a crucial skill in
          programming.
        </p>
        <h4>
          @support-coaches, I need some guidance. Here is my guidance request
          post:
        </h4>
        <div className='mb-3'>
          <label className='form-label'>Description </label>
          <input
            className='form-control'
            type='text'
            name='description'
            value={description}
            placeholder='3 - 5 sentences maximum'
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Link </label>
          <input
            className='form-control'
            type='text'
            name='link'
            value={link}
            placeholder='Link to project repository goes here'
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <label className='form-label'>Test Case </label>
        {inputList.map((x, i) => {
          return (
            <div className='mb-3' style={{ paddingBottom: '10px' }}>
              <label className='form-label'>Step {i + 1} </label>
              <input
                className='form-control'
                name='testCaseStep'
                placeholder='Describe specific step to take.'
                value={x.testCaseStep}
                onChange={(e) => setTestCaseStep(e.target.value)}
                required
              />
              <label className='form-label'>EXPECTATION</label>
              <input
                className='form-control'
                name='testCaseExpectation'
                placeholder='Describe the outcome you expect.'
                value={x.testCaseExpectation}
                onChange={(e) => settestCaseExpectation(e.target.value)}
                required
              />
              <label className='form-label'>ACTUAL RESULT </label>
              <input
                className='form-control'
                name='testCaseResult'
                placeholder='Describe the actual outcome.'
                value={x.testCaseResult}
                onChange={(e) => setTestCaseResult(e.target.value)}
                required
              />

              <div
                className='btn-box'
                style={{
                  marginTop: '5px',
                  marginBottom: '5px',
                  float: 'right'
                }}
              >
                {inputList.length !== 1 && (
                  <button
                    type='button'
                    className='btn btn-danger '
                    style={{ float: 'right' }}
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove Step {i + 1}
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    style={{ marginTop: '5px', float: 'right', width: '133px' }}
                    type='button'
                    class='btn btn-primary '
                    onClick={handleAddClick}
                  >
                    Add Step {i + 2}
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className='mb-3' style={{ marginTop: '10px' }}>
          <label className='form-label'>Errors & Exceptions </label>
          <input
            className='form-control'
            type='text'
            name='errorsExceptions'
            value={errorsExceptions}
            placeholder='Tell us what errors you are seeing and where in the test case they occur.'
            onChange={(e) => setErrorsExceptions(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Googled </label>
          <input
            className='form-control'
            type='text'
            name='googled'
            value={googled}
            placeholder='Include your google search queries (word for word) and results'
            onChange={(e) => setGoogled(e.target.value)}
            required
          />
        </div>
        <div class='row justify-content-center'>
          <Button
            type='button'
            color='primary '
            style={{ textAlign: 'center', width: '12%' }}
            onClick={(e) =>
              copyToClip(document.getElementById('form').innerHTML)
            }
            id='copy'
          >
            COPY
          </Button>
          <Popover
            placement='bottom'
            isOpen={popoverOpen}
            target='copy'
            toggle={togglePopover}
          >
            <PopoverHeader style={{ textAlign: 'center' }}>
              Copied!
            </PopoverHeader>
            <PopoverBody style={{ textAlign: 'center' }}>
              Go ahead and paste this into the Slack Channel{' '}
              <span>&#128578;</span>
            </PopoverBody>
          </Popover>
        </div>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      </form>
    </div>
  );
}

export default App;
