/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'buddy';
    var place = params.place || 'the internet';
    return {payload:  'Hello, ' + name + ' from ' + place + '!'};
}
