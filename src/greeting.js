/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'Typ';
    var place = params.place || 'dem Internet';
    return {payload:  'Guten Tag, ' + name + ' aus ' + place + '!'};
}
