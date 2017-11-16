// SList: Append Val
function remove_after(val, after){
    var runner = this.head
    while (runner != null){
        if(runner.val == after){
            chow = SLNewNode(val);
            chow.next = runner.next;
            runner = chow;
        }
        runner = runner.next
    }
    return SList
}

// SList: Remove Val

