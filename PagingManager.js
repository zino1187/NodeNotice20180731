class PagingManager{
	constructor(request, totalRecord){
		this.currentPage=1;
		if(request.query.currentPage!=undefined){
			this.currentPage=request.query.currentPage;
		}
		this.totalRecord=totalRecord;
		this.pageSize=10;
		this.totalPage=parseInt(Math.ceil(this.totalRecord/this.pageSize));
		this.blockSize=10;
		this.firstPage=this.currentPage-((this.currentPage-1)%this.blockSize);
		this.lastPage=this.firstPage+(this.blockSize-1);
		this.curPos=(this.currentPage-1)*this.pageSize;
		this.num=this.totalRecord-this.curPos;
	}
}

module.exports = PagingManager;