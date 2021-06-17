import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputList, setInputList] = useState([{}]);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [errorsExceptions, setErrorsExceptions] = useState('');
  const [googled, setGoogled] = useState('');
  const [testCaseStep, setTestCaseStep] = useState('');
  const [testCaseExpectation, settestCaseExpectation] = useState();
  const [testCaseResult, setTestCaseResult] = useState('');

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
    setInputList([...inputList]);
  };

  const ShowList = (e) => {
    e.preventDefault();
    setInputList([...inputList, formInfo]);
    console.log('list: ', inputList);
  };

  return (
    <div className='App container justify-content-center'>
      <h3>SDMM Guidance Request Form</h3>
      <form style={{ width: '80%' }}>
        <p>
          @support-coaches, I need some guidance. Here is my guidance request
          post:
        </p>
        <div className='mb-3'>
          <label className='form-label'>Description </label>
          <input
            className='form-control'
            type='text'
            name='description'
            value={description}
            placeholder='3 - 5 sentences maximum'
            onChange={(e) => setDescription(e.target.value)}
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
              />
              <label className='form-label'>EXPECTATION</label>
              <input
                className='form-control'
                name='testCaseExpectation'
                placeholder='Describe the outcome you expect.'
                value={x.testCaseExpectation}
                onChange={(e) => settestCaseExpectation(e.target.value)}
              />
              <label className='form-label'>ACTUAL RESULT </label>
              <input
                className='form-control'
                name='testCaseResult'
                placeholder='Describe the actual outcome.'
                value={x.testCaseResult}
                onChange={(e) => setTestCaseResult(e.target.value)}
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
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    style={{ marginTop: '5px', float: 'right' }}
                    type='button'
                    class='btn btn-primary '
                    onClick={handleAddClick}
                  >
                    Add Another Step
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
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Googled </label>
          <input
            className='form-control'
            type='text'
            name='googled'
            value={googled}
            placeholder='Include your google search queries and results'
            onChange={(e) => setGoogled(e.target.value)}
          />
        </div>
        <div class='row justify-content-center'>
          <button
            type='button'
            class='btn btn-primary '
            style={{ textAlign: 'center', width: '12%' }}
            onClick={ShowList}
          >
            COPY
          </button>
        </div>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      </form>
    </div>
  );
}

export default App;
