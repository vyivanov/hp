function alert()
{
    alert("I don't looking for a job at the moment")
}

function timestamp(self)
{
    self.href=self.href.split('?')[0]+'?'+new Date().getTime()
}
