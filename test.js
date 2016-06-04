const assert = require('chai').assert;
const fs = require('fs');


describe('Ensure all files integrity', () => {
  it('Proper JSON files', () => {
    const fileList = fs.readdirSync('./apps');
    fileList.forEach( (fileName) => {
      try {
        require(`./apps/${fileName}`);
      } catch (err) {
        console.log(err);
        assert.fail(null, null, `Cannot parse JSON file ${fileName}`);
      }
    });
  });
  it('Required Fields are present.', () => {
    const fileList = fs.readdirSync('./apps');
    fileList.forEach( (fileName) => {
      const appInfos = require(`./apps/${fileName}`);
      assert.isDefined(appInfos.name,
                       `Name field is missing for: ${fileName}`);
      assert.isDefined(appInfos.slug,
                       `Slug field iis missing for: ${fileName}`);
      assert.isDefined(appInfos.icon,
                       `Icon field iis missing for: ${fileName}`);
    });
  });
});
